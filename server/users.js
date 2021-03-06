'use strict'

const db = require('APP/db')
const User = db.model('users')
const Cart = db.model('cart')
const Purchase = db.model('purchase')
const Song = db.model('song')
const SongReviews = db.model('songReview')

const {
  mustBeLoggedIn,
  forbidden
} = require('./auth.filters')

module.exports = require('express').Router()
  .get('/',
    // The forbidden middleware will fail *all* requests to list users.
    // Remove it if you want to allow anyone to list all users on the site.
    //
    // If you want to only let admins list all the users, then you'll
    // have to add a role column to the users table to support
    // the concept of admin users.
    // (req, res, next) => { if (!req.user.isAdmin) forbidden('listing users is not allowed') },
    (req, res, next) => {
      if (!req.user.isAdmin) res.status(404).send('Access Denied')
      else {
        User.findAll()
          .then(users => res.json(users))
          .catch(next)
      }
    }
  )

  .get('/:id/cart',
    mustBeLoggedIn,
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

  .get('/:id/songs',
    (req, res, next) =>
    User.findById(req.user.id)
    .then(user => user.getSongs())
    .then(userSongs => {
      console.log(userSongs)
      res.json(userSongs)
    })
    .catch(next)
  )

  .get('/purchases',
    (req, res, next) =>
    Purchase.findAll({
      where: {
        user_id: req.user.id
      }
    })
    .then(purchases => {
      console.log('hello', purchases)
      res.json(purchases)
    })
    .catch(next)
  )
  .get('/:id',
    mustBeLoggedIn,
    (req, res, next) =>
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next)
  )

  .post('/:id/cart/newSong',
    (req, res, next) => {
      Cart.findOne({
        where: {
          user_id: req.params.id
        }
      })
        .then(cart => cart.addSong(req.body.song_id))
        .then(updatedCart => res.json(updatedCart))
        .catch(next)
    }
  )
  .post('/addSongs',
    (req, res, next) => {
      User.findById(req.user.id)
      .then(user => user.addSongs(req.body))
      .catch(console.error)
    })

  .post('/:id/cart',
    (req, res, next) =>
    User.findById(req.params.id)
    .then(user => Cart.create({
      user_id: req.params.id
    }))
    .then(newCart => res.json(newCart))
    .catch(next)
  )

  .post('/purchase',
    mustBeLoggedIn,
    (req, res, next) => {
      Cart.findOne({
        where: {
          user_id: req.user.id
        }
      })
        .then(cart => Cart.newPurchase(cart, req.user.id))
        .then(purchase => res.json(purchase))
        .catch(next)
    }
  )

  .post('/',
    (req, res, next) => {
      User.create(req.body)
        .then(user => res.status(201).json(user))
        .catch(next)
    })

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
  .delete('/cart',
    (req, res, next) => {
      Cart.findOne({
        where: {
          user_id: req.user.id
        }
      })
        .then(cart => cart.clearCart())
        .then(() => res.send(201))
        .catch(next)
    })
  .delete('/:id',
    (req, res, next) =>
    User.findById(req.params.id)
    .then(user => user.destroy())
    .then(() => res.json('User Deleted'))
    .catch(next)
  )
