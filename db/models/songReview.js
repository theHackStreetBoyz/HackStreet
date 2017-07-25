const DataTypes = require('sequelize')

module.exports = db => db.define('songReview', {
  stars: {
    type: DataTypes.INTEGER,
    validate: { min: 1, max: 5 }
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})

module.exports.associations = (SongReview, {User, Song}) => {
  SongReview.belongsTo(Song)
  SongReview.belongsTo(User)
}
