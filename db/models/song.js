'use strict'

const _ = require('lodash')

const DataTypes = require('sequelize')

module.exports = db => db.define('song', {
  name: {
    type: DataTypes.STRING(), // eslint-disable-line new-cap
    allowNull: false,
    set: function(val) {
      this.setDataValue('name', val.trim())
    }
  },
  artist: {
    type: DataTypes.STRING
  },
  album: {
    type: DataTypes.STRING
  },
  availible: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  genre: {
    type: DataTypes.STRING
  },
  length: {
    type: DataTypes.INTEGER
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  audioUrl: {
    type: DataTypes.VIRTUAL,
    get: function() {
      return /* `/api/songs/${this.id}/audio` */ 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3'
    }
  },
  /* NOTE: `url` is internal to the server, and is hidden from the client. */
  url: {
    type: DataTypes.STRING(), // eslint-disable-line new-cap
    allowNull: false
  },
}, {
  getterMethods: {
    price: function() {
      const dollarAmt = this.getDataValue('price') / 100
      return dollarAmt.toFixed(2)
    }
  },
  setterMethods: {
    price: function(dollars) {
      this.setDataValue('price', dollars * 100)
    }
  },
  instanceMethods: {
    toJSON: function() { // overriding toJSON to prevent url from leaking to client
      // see https://github.com/sequelize/sequelize/issues/1462
      return _.omit(this.get(), ['url'])
    },
    getStars() {
      return db.model('songReviews').findAll({
        where: {
          songId: this.id
        }
      })
      .then(reviews => {
        let totalStars = 0
        reviews.forEach(review => {
          totalStars += review.stars
        })
        return (totalStars / reviews.length).toFixed(1)
      })
    }
  }
})

module.exports.associations = (Song, {User, Artist, SongReview, Cart, Purchase}) => {
  Song.belongsToMany(User, {through: 'userSong'})
  Song.belongsToMany(Cart, {through: 'cartSong'})
  Song.belongsToMany(Purchase, {through: 'purchaseSong'})
  Song.hasMany(SongReview)
}
