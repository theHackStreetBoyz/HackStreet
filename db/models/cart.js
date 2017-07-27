const DataTypes = require('sequelize')

module.exports = db => db.define('cart', {}, {
  classMethods: {
    newPurchase: function(cart, userId) {
      return db.model('purchase').create(cart)
        .then(purchase => {
          return Promise.all([
            cart.getSongs()
            .then(songs => purchase.setSongs(songs)),
            purchase.setUser(userId)
          ])
        })
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
