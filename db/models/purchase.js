const DataTypes = require('sequelize')

module.exports = db => db.define('purchase', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  // OB/TZL: recommend using association over array of integers
  songs: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    defaultValue: []
  }
}, {
  classMethods: {
    newPurchaseFromCart(cart, userId) {
      return db.model('purchase').create(cart) // OB/TZL: also songs won't be added by this
      .then(newCart => { // OB/TZL: naming: newPurchase?
        newCart.setUser(userId)
        return newCart
      })
    }
  }
})

module.exports.associations = (Purchase, {Song, User}) => {
  Purchase.belongsTo(User)
}
