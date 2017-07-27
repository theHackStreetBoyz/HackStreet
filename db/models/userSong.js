const DataTypes = require('sequelize')

module.exports = db => db.define('userSong', {
  song_id: DataTypes.INTEGER
})
