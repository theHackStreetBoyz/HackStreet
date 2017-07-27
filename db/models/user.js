'use strict'

// bcrypt docs: https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcryptjs')
    , {STRING, VIRTUAL, INTEGER, ARRAY} = require('sequelize')

module.exports = db => db.define('users', {
  name: STRING,
  email: {
    type: STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
    }
  },
  cart_id: INTEGER,
  // We support oauth, so users may or may not have passwords.
  password_digest: STRING, // This column stores the hashed password in the DB, via the beforeCreate/beforeUpdate hooks
  password: VIRTUAL // Note that this is a virtual, and not actually stored in DB
}, {
  indexes: [{fields: ['email'], unique: true}],
  hooks: {
    beforeCreate: function() {
      setEmailAndPassword
    },
    beforeUpdate: setEmailAndPassword,
    afterCreate: function(user) {
      db.model('cart').create({user_id: user.id})
      .then(cart => {
        user.cart_id = cart.id
        user.save()
      })
      // .then(cart => {
      //   // console.log(cart)
      //   // cart.user_id = this.id
      //   this.cart_id = cart.id
      // })
    }
  },
  defaultScope: {
    attributes: {exclude: ['password_digest']}
  },
  instanceMethods: {
    // This method is a Promisified bcrypt.compare
    authenticate(plaintext) {
      return bcrypt.compare(plaintext, this.password_digest)
    },
    getPurchases() {
      return db.model('purchases').findAll({
        where: {
          userId: this.id
        }
      })
    }
  }
})

module.exports.associations = (User, {OAuth, Thing, Song, Favorite, Cart, Purchase, SongReview}) => {
  User.hasOne(OAuth)
  User.belongsToMany(Thing, {as: 'favorites', through: Favorite})
  User.belongsToMany(Song, {through: 'userSong'})
  User.hasOne(Cart)
  User.hasMany(Purchase)
  User.hasMany(SongReview)
}

function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase()
  if (!user.password) return Promise.resolve(user)

  return bcrypt.hash(user.get('password'), 10)
    .then(hash => user.set('password_digest', hash))
}
