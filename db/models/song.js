'use strict'

const _ = require('lodash')

const DataTypes = require('sequelize')

module.exports = db => db.define('song', {
  name: {
    type: DataTypes.STRING(1e4), // eslint-disable-line new-cap
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
      return `/api/songs/${this.id}/audio`
    }
  },
  /* NOTE: `url` is internal to the server, and is hidden from the client. */
  url: {
    type: DataTypes.STRING(1e4), // eslint-disable-line new-cap
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
  scopes: {
    populated: () => ({ // function form lets us use to-be-defined models
      include: [{
        model: db.model('artist')
      }]
    })
  },
  instanceMethods: {
    toJSON: function() { // overriding toJSON to prevent url from leaking to client
      // see https://github.com/sequelize/sequelize/issues/1462
      return _.omit(this.get(), ['url'])
    },
    getStars() {
      return db.models('songReviews').findAll({
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
  // Song.belongsTo(Artist)
  Song.belongsToMany(User, {through: 'userSong'})
  // Song.belongsTo(Album)
  Song.belongsToMany(Cart, {through: 'cartSong'})
  Song.belongsToMany(Purchase, {through: 'purchaseSong'})
  Song.hasMany(SongReview)
}
