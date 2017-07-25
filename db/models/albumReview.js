const DataTypes = require('sequelize')

module.exports = db => db.define('albumReview', {
  stars: {
    type: DataTypes.INTEGER,
    validate: { min: 1, max: 5 }
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})

module.exports.associations = (AlbumReview, {User, Album}) => {
  AlbumReview.belongsTo(Album)
  AlbumReview.belongsTo(User)
}
