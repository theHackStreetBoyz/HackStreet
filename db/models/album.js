'use strict'

const DataTypes = require('sequelize')

module.exports = db => db.define('album', {

  name: {
    type: DataTypes.STRING(1e4), // eslint-disable-line new-cap
    allowNull: false,
    set: function(val) {
      this.setDataValue('name', val.trim())
    }
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.VIRTUAL,
    get: function() {
      return `/api/albums/${this.id}/image`
    }
  }
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
    songIds: () => ({ // function form lets us use to-be-defined models
      include: [{
        model: db.model('song'),
        attributes: ['id']
      }]
    }),
    populated: () => ({ // function form lets us use to-be-defined models
      include: [{
        model: db.model('song').scope('defaultScope', 'populated')
      }]
    })
  },

  instanceMethods: {
    toJSON: function() {
      // Return a shallow clone so toJSON method of the nested models can be called recursively.
      return Object.assign({}, this.get())
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

module.exports.associations = (Album, {User, Song, Artist, AlbumReview}) => {
  // Album.belongsTo(Artist)
  Album.hasMany(Song)
  Album.hasMany(AlbumReview)
}
