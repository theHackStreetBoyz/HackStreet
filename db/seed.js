'use strict'

const db = require('APP/db'),
  {
    User,
    Thing,
    Favorite,
    Song,
    Artist,
    SongReview,
    Cart,
    CartSong,
    Promise
  } = db,
  {
    mapValues
  } = require('lodash')

function seedEverything() {
  console.log('CartSong:', CartSong)
  const seeded = {
    users: users(),
    things: things(),
    songs: songs(),
  }
  // When you switch the order of these, for some reason favorites stops running...
  seeded.favorites = favorites(seeded)
  seeded.reviews = reviews(seeded)
  seeded.carts = carts(seeded)
  // console.log('HERE', seeded)

  return Promise.props(seeded)
}

const things = seed(Thing, {
  surfing: {
    name: 'surfing'
  },
  smiting: {
    name: 'smiting'
  },
  puppies: {
    name: 'puppies'
  },
})

const favorites = seed(Favorite,
  // We're specifying a function here, rather than just a rows object.
  // Using a function lets us receive the previously-seeded rows (the seed
  // function does this wiring for us).
  //
  // This lets us reference previously-created rows in order to create the join
  // rows. We can reference them by the names we used above (which is why we used
  // Objects above, rather than just arrays).
  ({
    users,
    things
  }) => ({
    // The easiest way to seed associations seems to be to just create rows
    // in the join table.
    'obama loves surfing': {
      user_id: users.barack.id, // users.barack is an instance of the User model
      // that we created in the user seed above.
      // The seed function wires the promises so that it'll
      // have been created already.
      thing_id: things.surfing.id // Same thing for things.
    },
    'god is into smiting': {
      user_id: users.god.id,
      thing_id: things.smiting.id
    },
    'obama loves puppies': {
      user_id: users.barack.id,
      thing_id: things.puppies.id
    },
    'god loves puppies': {
      user_id: users.god.id,
      thing_id: things.puppies.id
    },
  })
)

if (module === require.main) {
  db.didSync
    .then(() => db.sync({
      force: true
    }))
    .then(seedEverything)
    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
  return (others = {}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
          // Is other a function? If so, call it. Otherwise, leave it alone.
          typeof other === 'function' ? other() : other)
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
        .map(key => {
          const row = rows[key]
          return {
            key,
            value: Promise.props(row)
              .then(row => Model.create(row)
                .catch(error => {
                  throw new BadRow(key, row, error)
                })
              )
          }
        }).reduce(
          (all, one) => Object.assign({}, all, {
            [one.key]: one.value
          }), {}
        )
      ))
      .then(seeded => {
        // console.log(seeded)
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

// const artist = seed(Artist, {
//   darryn: {
//     name: 'Darryn'
//   },
//   max: {
//     name: 'Max'
//   }
// })

// const album = seed(Album, {
//   Dhits: {
//     name: 'D Greatest Hits',
//     price: 15
//   },
//   Mhits: {
//     name: 'M Greatest Hits',
//     price: 15
//   }
// })

// const AlbumArtistSeed = seed(albumArtistSeed,
//   // We're specifying a function here, rather than just a rows object.
//   // Using a function lets us receive the previously-seeded rows (the seed
//   // function does this wiring for us).
//   //
//   // This lets us reference previously-created rows in order to create the join
//   // rows. We can reference them by the names we used above (which is why we used
//   // Objects above, rather than just arrays).
//   ({
//     artist,
//     album
//   }) => ({
//     // The easiest way to seed associations seems to be to just create rows
//     // in the join table.
//     'obama loves surfing': {
//       artist_id: artist.darryn.id, // users.barack is an instance of the User model
//       // that we created in the user seed above.
//       // The seed function wires the promises so that it'll
//       // have been created already.
//       album_id: album.Dhits.id // Same thing for things.
//     }
//   })
// )

// const albumArtistSeed = seed(albumArtist,
//   ({
//     artist,
//     album
//   }) => ({
//     'set darryn': {
//       artist_id: 1,
//       album_id: 2
//     },
//     2: {
//       artist_id: artist.max.id,
//       album_id: album.Mhits
//     }
//   }))

const songs = seed(Song, {
  songOne: {
    name: 'Darryns Anthem',
    genre: 'Rock',
    length: 180,
    price: 99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Darryn's Greatest Hits",
    artist: "The Deadly Darryn's"
  },
  songTwo: {
    name: 'Maxs Anthem',
    genre: 'Jazz',
    length: 190,
    price: 99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Max's Greatest Hits",
    artist: "The Miraculous Max's"
  },
  songThree: {
    name: 'Dans Anthem',
    genre: 'Punk',
    length: 200,
    price: 99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Dan's Greatest Hits",
    artist: 'Manganesey Dan'
  },
  songFour: {
    name: 'Karens Anthem',
    genre: 'DEATH METAL MOTHER F*****R',
    length: 210,
    price: 99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Alvin's Greatest Hits",
    artist: 'Alvin and his Chipmunks'
  },
  songFive: {
    name: 'Darryns Least Favorite Songs',
    genre: 'Rock',
    length: 180,
    price: 99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Darryn's Greatest Hits",
    artist: "The Deadly Darryn's"
  },
  songSix: {
    name: 'Maxs Least Favorite Songs',
    genre: 'Jazz',
    length: 190,
    price: 99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Max's Greatest Hits",
    artist: "The Miraculous Max's"
  },
  songSeven: {
    name: 'Dans Least Favorite Songs',
    genre: 'Punk',
    length: 200,
    price: 99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Dan's Greatest Hits",
    artist: 'Manganesey Dan'
  },
  songEight: {
    name: 'Alvins Least Favorite Songs',
    genre: 'DEATH METAL MOTHER F*****R',
    length: 210,
    price: 99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Alvin's Greatest Hits",
    artist: 'Alvin and his Chipmunks'
  },
  9: {
    name: 'Kates Anthem',
    genre: 'Rock',
    length: 180,
    price: 99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Kate's Greatest Hits",
    artist: "The Go Fly a Kate's"
  },
  10: {
    name: 'Omris Anthem',
    genre: 'Jazz',
    length: 190,
    price: 99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Omri's Greatest Hits",
    artist: "The Optimistic Omri's"
  },
  11: {
    name: 'Cassios Anthem',
    genre: 'Punk',
    length: 200,
    price: 99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Cassio's Greatest Hits",
    artist: 'Eh Nois'
  },
  12: {
    name: 'Alvins Anthem',
    genre: 'DEATH METAL MOTHER F*****R',
    length: 210,
    price: 99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Karen's Greatest Hits",
    artist: 'Karen and her Herps'
  },
  13: {
    name: 'Kates Least Favorite Songs',
    genre: 'Rock',
    length: 180,
    price: 99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Kate's Greatest Hits",
    artist: "The Go Fly a Kate's"
  },
  14: {
    name: 'Omris Least Favorite Songs',
    genre: 'Jazz',
    length: 190,
    price: 99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Omri's Greatest Hits",
    artist: "The Optimistic Omri's"
  },
  15: {
    name: 'Cassios Least Favorite Songs',
    genre: 'Punk',
    length: 200,
    price: 99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Cassio's Greatest Hits",
    artist: 'Eh Nois'
  },
  16: {
    name: 'Karens Least Favorite Songs',
    genre: 'DEATH METAL MOTHER F*****R',
    length: 210,
    price: 99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Karen's Greatest Hits",
    artist: 'Karen and her Herps'
  },
})
const carts = seed(CartSong,
  ({
    users,
    songs
  }) => ({
    'godCart1': {
      cart_id: users.god.cart_id,
      song_id: songs.songFour.id
    },
    'godCart2': {
      cart_id: users.god.cart_id,
      song_id: songs.songFive.id
    },
    'godCart3': {
      cart_id: users.god.cart_id,
      song_id: songs.songOne.id
    },
    'barackCart1': {
      cart_id: users.barack.cart_id,
      song_id: songs.songSeven.id
    },
    'barackCart2': {
      cart_id: users.barack.cart_id,
      song_id: songs.songTwo.id
    },
    'barackCart3': {
      cart_id: users.barack.cart_id,
      song_id: songs.songThree.id
    },
  }))

const reviews = seed(SongReview,
  ({
    songs,
    users
  }) => ({
    'godReviewOne': {
      stars: 3,
      text: "This has got to be the best song I've ever heard!",
      song_id: songs.songOne.id,
      user_id: users.god.id
    },
    'godReviewTwo': {
      stars: 3,
      text: 'Honestly? eh...',
      song_id: songs.songTwo.id,
      user_id: users.god.id
    },
    'godReviewThree': {
      stars: 3,
      text: 'This song was equal parts insightful and utter nonsense',
      song_id: songs.songThree.id,
      user_id: users.god.id
    },
    'godReviewFour': {
      stars: 3,
      text: 'This song is the musical equivalent of an above ground swimming pool',
      song_id: songs.songFour.id,
      user_id: users.god.id
    },
    'barackReviewOne': {
      stars: 3,
      text: "This has got to be the best song I've ever heard!",
      song_id: songs.songFive.id,
      user_id: users.barack.id
    },
    'barackReviewTwo': {
      stars: 3,
      text: 'Honestly? eh...',
      song_id: songs.songSix.id,
      user_id: users.barack.id
    },
    'barackReviewThree': {
      stars: 3,
      text: 'This song was equal parts insightful and utter nonsense',
      song_id: songs.songSeven.id,
      user_id: users.barack.id
    },
    'barackReviewFour': {
      stars: 3,
      text: 'This song is the musical equivalent of an above ground swimming pool',
      song_id: songs.songEight.id,
      user_id: users.barack.id
    },
  }))

const users = seed(User, {
  god: {
    email: 'god@example.com',
    name: 'So many names',
    password: '1234',
  },
  barack: {
    name: 'Barack Obama',
    email: 'barack@example.gov',
    password: '1234'
  },
  stan: {
    name: 'Stan Getz',
    email: 'Stan@letsGetziton.com',
    passoword: 'secure345'
  },
  ken: {
    name: 'Ken Ramos',
    email: 'ken@letsGetziton.com',
    passoword: 'secure345'
  },
  alez: {
    name: 'Alex Gates',
    email: 'alez@letsGetziton.com',
    passoword: 'secure345'
  },
})
module.exports = Object.assign(seed, {
  users,
  things,
  songs,
  favorites,
  reviews,
  carts
})
