'use strict'

const db = require('APP/db')
const User = db.model('users')
const Songs = db.model('song')
const SongReviews = db.model('songReview')

const {
  mustBeLoggedIn,
  forbidden
} = require('./auth.filters')

module.exports = require('express').Router()
    .get('/',
    (req, res, next) =>
        Songs.findAll()
        .then(songs => res.json(songs))
        .catch(next)
    )

    .get('/:id',
    (req, res, next) =>
        Songs.findById(req.params.id)
        .then(song => res.json(song))
        .catch(next)
    )

    .get('/:id/reviews',
    (req, res, next) =>
        SongReviews.findAll({
          where: {
            song_id: req.params.id
          }
        })
        .then(reviews => res.json(reviews))
        .catch(next)
    )

    .post('/:id/review',
        mustBeLoggedIn,
        (req, res, next) => {
          Songs.findOne({
            where: {
              id: req.params.id
            }
          })
            .then(song => SongReviews.create({
              stars: req.body.stars,
              text: req.body.text,
              song_id: song.id
            }))
            .then(newReview => res.json(newReview))
            .catch(next)
        }
    )

    .delete('/:id/review',
    mustBeLoggedIn,
    (req, res, next) =>
        SongReviews.findOne({
          where: {
            song_id: req.params.id
          }
        })
        .then(review => review.destroy())
        .then(() => res.json('Review Deleted'))
        .catch(next)
    )

    .put('/:id',
    mustBeLoggedIn,
    (req, res, next) =>
        Songs.findById(req.params.id)
        .then(song => song.update(req.body))
        .then(updatedSong => res.json(updatedSong))
        .catch(next)
    )
