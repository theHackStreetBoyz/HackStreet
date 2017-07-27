'use strict'

const db = require('APP/db')
const User = db.model('users')
const Songs = db.model('song')
const SongReviews = db.model('songReview')

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
    // OB/TZL: could consider /api/reviews (allowing for query string search)
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