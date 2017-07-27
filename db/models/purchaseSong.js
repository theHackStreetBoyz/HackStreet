const DataTypes = require('sequelize')

module.exports = db => db.define('purchaseSong', {
  song_id: DataTypes.INTEGER
})
