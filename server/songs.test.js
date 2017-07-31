const request = require('supertest')
    , {expect} = require('chai')
    , db = require('APP/db')
    , app = require('./start')
    , songs = require('./songs.js')

/* global describe it before afterEach */

describe('/api/users', () => {
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('GET /', () =>
    describe('Gets all the songs', () =>
      it('Success with status 200', () =>
        request(app)
          .get(`/api/songs`)
          .expect(200)
      )))
})

// describe('/api/songs', () => {
//   before('Await database sync', () => db.didSync)
//   afterEach('Clear the tables', () => db.truncate({ cascade: true }))

// Test for GET songs db

//   describe('GET /', () =>
//     describe('find ALL songs', () =>
//       it('fails', () =>
//         request(app)
//           .get(`/api/songs`)
//           .expect(200)
//           .expect(res => expect(res.body).to.contain({
//             genre: 'Rock'
//             })
//           )

//       ))

// )

  // describe('GET /:id', () =>
  //   describe('find a SINGLE songs', () =>
  //     it('fails', () =>
  //       request(app)
  //         .get(`/api/songs/1`)
  //         .expect(200)

  //     )))

  // describe('GET /:id/reviews', () =>
  //   describe('find songs with reviews', () =>
  //     it('fails', () =>
  //       request(app)
  //         .get(`/api/songs/1/reviews`)
  //         .expect(200)

  //     )))
