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
  genre: {
    type: DataTypes.STRING
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
  defaultScope: {
    attributes: {
      include: ['albumId'], // excluded by default, need for `song.getAlbum()`
    },
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
      return db.models('albumReviews').findAll({
        where: {
          albumId: this.id
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

module.exports.associations = (Song, {Artist, Album, SongReview}) => {
  Song.belongsTo(Artist)
  Song.belongsTo(Album)
  Song.hasMany(SongReview)
}
