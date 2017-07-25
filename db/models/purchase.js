const DataTypes = require('sequelize')

module.exports = db => db.define('purchase', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
})

module.exports.associations = (Purchase, {Song, Album, User}) => {
  Purchase.belongsTo(User)
  Purchase.hasMany(Song)
  Purchase.hasMany(Album)
}
