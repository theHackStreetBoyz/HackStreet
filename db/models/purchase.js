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
  },
  classMethods: {
    newPurchaseFromCart(cart, user) {
      return db.models('purchase').create(cart)
      .then(newCart => {
        newCart.setUser(user)
        return newCart
      })
    }
  }
})

module.exports.associations = (Purchase, {Song, User}) => {
  Purchase.belongsTo(User)
}
