const DataTypes = require('sequelize')

module.exports = db => db.define('cart')

module.exports.associations = (Cart, {Song, Album, User}) => {
  Cart.belongsTo(User)
  Cart.hasMany(Song)
  Cart.hasMany(Album)
}
