'use strict'

const db = require('APP/db')
    , {Cart} = db
    , {expect} = require('chai')

/* global describe it before afterEach */

const songs = [{
  name: 'Karens Least Favorite Songs',
  genre: 'DEATH METAL MOTHER F*****R',
  length: 210,
  price: 0.99,
  url: 'https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg',
  album: "Karen's Greatest Hits",
  artist: 'Karen and her Herps'
}, {
  name: 'Omris Least Favorite Songs',
  genre: 'Jazz',
  length: 190,
  price: 0.99,
  url: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg',
  album: "Omri's Greatest Hits",
  artist: "The Optimistic Omri's"
}, {
  name: 'Cassios Least Favorite Songs',
  genre: 'Punk',
  length: 200,
  price: 0.99,
  url: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/The-stages-of-puppy-growth.jpg?itok=9ptPJwY8',
  album: "Cassio's Greatest Hits",
  artist: 'Eh Nois'
},
]

describe('Cart', () => {
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('adding to a cart', () => {
    xit('can add one song to a cart', () => {
      Cart.create()
      .then(cart => cart.addSong(songs[0])
        .then(cart => cart.getSongs()
          .then(songs => expect(songs).to.have.length(1))
      )
    )
      .catch(console.error)
    })

    xit('can add many songs to a cart', () => {
      Cart.create()
      .then(cart => cart.addSongs(songs))
      .then(cart => cart.getSongs())
      .then(songs => expect(songs).to.have.length(3))
      .catch(console.error)
    })
  })

  describe('removing from a cart', () => {
    xit('can remove all the songs from a cart', () => {
      Cart.create()
      .then(cart => cart.addSongs(songs))
      .then(cart => cart.clearCart())
      .then(cart => cart.getSongs())
      .then(songs => expect(songs).to.have.length(0))
      .catch(console.error)
    })
  })
  // describe('authenticate(plaintext: String) ~> Boolean', () => {
  //   it('resolves true if the password matches', () =>
  //     User.create({ password: 'ok' })
  //       .then(user => user.authenticate('ok'))
  //       .then(result => expect(result).to.be.true)
  //       .catch(console.error))

  //   it("resolves false if the password doesn't match", () =>
  //     User.create({ password: 'ok' })
  //       .then(user => user.authenticate('not ok'))
  //       .then(result => expect(result).to.be.false)
  //       .catch(console.error))
  // })
})
