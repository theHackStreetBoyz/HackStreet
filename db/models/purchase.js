const DataTypes = require('sequelize')

module.exports = db => db.define('purchase')

module.exports.associations = (Purchase, {Song, User}) => {
  Purchase.belongsTo(User)
  Purchase.belongsToMany(Song, {through: 'purchaseSong'})
}
