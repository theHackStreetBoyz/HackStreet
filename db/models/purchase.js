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
  classMethods: {
    newPurchaseFromCart(cart, userId) {
      return db.model('purchase').create(cart)
      .then(newCart => {
        newCart.setUser(userId)
        return newCart
      })
    }
  }
})

module.exports.associations = (Purchase, {Song, User}) => {
  Purchase.belongsTo(User)
}
