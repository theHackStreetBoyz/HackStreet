const DataTypes = require('sequelize')

module.exports = db => db.define('cart', {}, {
  classMethods: {
    newPurchase: function(userId) {
      return db.model('purchase').create(this)
        .then(newPurchase => Promise.all([
          newPurchase.getSongs().then(songs => newPurchase.setSongs(songs)),
          newPurchase.setUser(userId)
        ]))
    }
  }
})

module.exports.associations = (Cart, {
  Song,
  User
}) => {
  Cart.belongsTo(User)
  Cart.belongsToMany(Song, {
    through: 'cartSong'
  })
}
