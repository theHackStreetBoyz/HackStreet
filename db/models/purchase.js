const DataTypes = require('sequelize')

module.exports = db => db.define('purchase', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  songs: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    defaultValue: []
  }
}, {
  getterMethods: {
    songs: function() {
      db.models('song').findAll({
        where: {
          id: 0
        }
      })
    }
  }
})

module.exports.associations = (Purchase, {Song, Album, User}) => {
  Purchase.belongsTo(User)
  // Purchase.hasMany(Song)
  // Purchase.hasMany(Album)
}
