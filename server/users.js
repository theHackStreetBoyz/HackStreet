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
    // The forbidden middleware will fail *all* requests to list users.
    // Remove it if you want to allow anyone to list all users on the site.
    //
    // If you want to only let admins list all the users, then you'll
    // have to add a role column to the users table to support
    // the concept of admin users.
  // forbidden('listing users is not allowed'),
    (req, res, next) =>
      User.findAll()
      .then(users => res.json(users))
      .catch(next)
  )

  .get('/:id',
    mustBeLoggedIn,
      (req, res, next) =>
      User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(next)
  )

  .get('/:id/cart',
    mustBeLoggedIn,
    (req, res, next) =>
      Cart.findOne({
        where: {
          user_id: req.params.id
        }
      })
      .then(cart => cart.getSongs())
      .then(songs => res.json(songs))
      .catch(next)
  )

   .get('/:id/songs',
    (req, res, next) =>
      User.findById(req.params.id)
      .then(user => user.getSongs())
      .then(userSongs => res.json(userSongs))
      .catch(next)
  )

  .get('/:id/purchases',
    (req, res, next) =>
      Purchase.findAll({
        where: {
          user_id: req.params.id
        }
      })
      .then(purchases => res.json(purchases))
      .catch(next)
  )

  .post('/:id/cart',
    (req, res, next) =>
      User.findById(req.params.id)
      .then(user => Cart.create({
        user_id: req.params.id
      }))
      .then(newCart => res.json(newCart))
      .catch(next)
  )

  .post('/:id/cart/newSong',
    (req, res, next) =>
      Cart.findOne({
        where: {
          user_id: req.params.id
        }
      })
      .then(cart => cart.addSong(req.body.song_id))
      .then(updatedCart => res.json(updatedCart))
      .catch(next)
  )

  .post('/:id/purchase',
    // mustBeLoggedIn,
    (req, res, next) => {
      Cart.findOne({
        where: {
          user_id: req.params.id
        }
      })
      .then(cart => Cart.newPurchase(cart, req.params.id))
      .then(purchase => res.json(purchase))
      .catch(next)
    }
  )

  .post('/:id/songReview',
    (req, res, next) => {
      SongReviews.create(req.body)
      .then(newReview => res.json(newReview))
      .catch(next)
    }
  )

  .post('/',
    (req, res, next) =>
      User.create(req.body)
      .then(user => res.status(201).json(user))
      .catch(next)
    )

  .put('/:id',
    (req, res, next) =>
      User.findById(req.params.id)
      .then(user => user.update(req.body))
      .then(updatedUser => res.json(updatedUser))
      .catch(next)
  )

  .delete('/:id/cart',
    (req, res, next) =>
    Cart.findOne({
      where: {
        user_id: req.params.id
      }
    })
    .then(cart => cart.removeSong(req.body.song_id))
    .then(updatedCart => res.json(updatedCart))
    .catch(next)
  )

  .delete('/:id',
    (req, res, next) =>
    User.findById(req.params.id)
    .then(user => user.destroy())
    .then(() => res.json('User Deleted'))
    .catch(next)
  )
