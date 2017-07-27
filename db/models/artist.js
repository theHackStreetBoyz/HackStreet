'use strict'

const DataTypes = require('sequelize')

module.exports = db => db.define('artist', {

  name: {
    type: DataTypes.STRING(1e4), // eslint-disable-line new-cap
    allowNull: false,
    set: function(val) {
      this.setDataValue('name', val.trim())
    }
  }

}, {

  instanceMethods: {
    // getAlbums: function() {
    //   return db.model('album').findAll({
    //     include: [{
    //       model: db.model('song'),
    //       include: [{
    //         model: db.model('artist'),
    //         where: { id: this.id } // makes this entire query an inner join
    //       }]
    //     }]
    //   })
    // },
    toJSON: function() {
      // Return a shallow clone so toJSON method of the nested models can be called recursively.
      return Object.assign({}, this.get())
    }
  }

})

module.exports.associations = (Artist, {User, Song}) => {
  // Artist.hasMany(Album)
  Artist.hasMany(Song)
  // Artist.belongsToMany(Album, {through: 'albumArtist'})
}
