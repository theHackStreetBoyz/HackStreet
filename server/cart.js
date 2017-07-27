'use strict'

const db = require('APP/db')
const User = db.model('users')
const Cart = db.model('cart')
const Purchase = db.model('purchase')
const Song = db.model('song')
const SongReviews = db.model('songReview')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
    .get('/',
    //mustBeLoggedIn,
    (req, res, next) =>
    Cart.findOne({
      where: {
        user_id: req.user.id
      }
    })
    .then(cart => cart.getSongs())
    .then(songs => res.json(songs))
    .catch(next)
  )