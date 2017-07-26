'use strict'

const db = require('APP/db')
const User = db.model('users')
const Albums = db.model('album')
const AlbumReviews = db.model('albumReview')

module.exports = require('express').Router()
    .get('/', 
    (req, res, next) => 
        // res.json('hi')
        Albums.findAll()
        .then(albums => res.json(albums))
        .catch(next)
    )
    .get('/:id',
    (req, res, next) =>
        Albums.findById(req.params.id)
        .then(album => res.json(album))
        .catch(next)
    )
    .get('/:id/reviews',
    (req, res, next) =>
        AlbumReviews.findAll({
            where: {
                album_id: req.params.id
            }
        })
        .then(reviews => res.json(reviews))
        .catch(next)
    )