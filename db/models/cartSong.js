const DataTypes = require('sequelize')

module.exports = db => db.define('cartSong', {
  song_id: DataTypes.INTEGER
})
