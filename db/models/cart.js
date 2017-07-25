const DataTypes = require('sequelize')

module.exports = db => db.define('cart', {
  // songs: {
  //   type: DataTypes.ARRAY(DataTypes.INTEGER),
  //   defaultValue: []
  // },
  // albums: {
  //   type: DataTypes.ARRAY(DataTypes.INTEGER),
  //   defaultValue: []
  // }
})

module.exports.associations = (Cart, {Song, Album, User}) => {
  Cart.belongsTo(User)
  Cart.belongsToMany(Song, {through: 'cartSong'})
  Cart.belongsToMany(Album, {through: 'cartAlbum'})
}
