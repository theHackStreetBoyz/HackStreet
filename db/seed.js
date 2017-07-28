'use strict'

const db = require('APP/db'),
  {
    User,
    Song,
    Artist,
    SongReview,
    Cart,
    CartSong,
    PurchaseSong,
    UserSong,

    Promise
  } = db,
  {
    mapValues
  } = require('lodash')

function seedEverything() {
  console.log('CartSong:', CartSong)
  const seeded = {
    users: users(),
    songs: songs(),
  }
  seeded.reviews = reviews(seeded)
  seeded.carts = carts(seeded)
  seeded.userSongs = userSongs(seeded)

  return Promise.props(seeded)
}

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

const songs = seed(Song, {
  songOne: {
    name: 'Darryns Anthem',
    genre: 'Rock',
    length: 180,
    price: 99,
    url: 'http://cdn.skim.gs/image/upload/v1456344012/msi/Puppy_2_kbhb4a.jpg',
    album: "Darryn's Greatest Hits",
    artist: "The Deadly Darryn's"
  },
  songTwo: {
    name: 'Maxs Anthem',
    genre: 'Jazz',
    length: 190,
    price: 99,
    url: 'https://assets.merriam-webster.com/mw/images/article/art-wap-article-main/puppy-3143-7cfb4d6a42dfc7d9d1ae7e23126279e8@1x.jpg',
    album: "Max's Greatest Hits",
    artist: "The Miraculous Max's"
  },
  songThree: {
    name: 'Dans Anthem',
    genre: 'Punk',
    length: 200,
    price: 99,
    url: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/The-stages-of-puppy-growth.jpg?itok=9ptPJwY8',
    album: "Dan's Greatest Hits",
    artist: 'Manganesey Dan'
  },
  songFour: {
    name: 'Karens Anthem',
    genre: 'DEATH METAL MOTHER F*****R',
    length: 210,
    price: 99,
    url: 'https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg',
    album: "Alvin's Greatest Hits",
    artist: 'Alvin and his Chipmunks'
  },
  songFive: {
    name: 'Darryns Least Favorite Songs',
    genre: 'Rock',
    length: 180,
    price: 99,
    url: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/The-stages-of-puppy-growth.jpg?itok=9ptPJwY8',
    album: "Darryn's Greatest Hits",
    artist: "The Deadly Darryn's"
  },
  songSix: {
    name: 'Maxs Least Favorite Songs',
    genre: 'Jazz',
    length: 190,
    price: 99,
    url: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-5.jpg',
    album: "Max's Greatest Hits",
    artist: "The Miraculous Max's"
  },
  songSeven: {
    name: 'Dans Least Favorite Songs',
    genre: 'Punk',
    length: 200,
    price: 99,
    url: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg',
    album: "Dan's Greatest Hits",
    artist: 'Manganesey Dan'
  },
  songEight: {
    name: 'Alvins Least Favorite Songs',
    genre: 'DEATH METAL MOTHER F*****R',
    length: 210,
    price: 99,
    url: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
    album: "Alvin's Greatest Hits",
    artist: 'Alvin and his Chipmunks'
  },
  9: {
    name: 'Kates Anthem',
    genre: 'Rock',
    length: 180,
    price: 99,
    url: 'http://ghk.h-cdn.co/assets/16/09/980x490/landscape-1457107485-gettyimages-512366437.jpg',
    album: "Kate's Greatest Hits",
    artist: "The Go Fly a Kate's"
  },
  10: {
    name: 'Omris Anthem',
    genre: 'Jazz',
    length: 190,
    price: 99,
    url: 'http://cdn.skim.gs/image/upload/v1456344012/msi/Puppy_2_kbhb4a.jpg',
    album: "Omri's Greatest Hits",
    artist: "The Optimistic Omri's"
  },
  11: {
    name: 'Cassios Anthem',
    genre: 'Punk',
    length: 200,
    price: 99,
    url: 'http://www.pawderosa.com/images/puppies.jpg',
    album: "Cassio's Greatest Hits",
    artist: 'Eh Nois'
  },
  12: {
    name: 'Alvins Anthem',
    genre: 'DEATH METAL MOTHER F*****R',
    length: 210,
    price: 99,
    url: 'http://dakotapethospital.com/clients/14546/images/pile_of_puppies.jpg',
    album: "Karen's Greatest Hits",
    artist: 'Karen and her Herps'
  },
  13: {
    name: 'Kates Least Favorite Songs',
    genre: 'Rock',
    length: 180,
    price: 99,
    url: 'https://blogs-images.forbes.com/kristintablang/files/2016/02/Uber-Puppies.jpg',
    album: "Kate's Greatest Hits",
    artist: "The Go Fly a Kate's"
  },
  14: {
    name: 'Omris Least Favorite Songs',
    genre: 'Jazz',
    length: 190,
    price: 99,
    url: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg',
    album: "Omri's Greatest Hits",
    artist: "The Optimistic Omri's"
  },
  15: {
    name: 'Cassios Least Favorite Songs',
    genre: 'Punk',
    length: 200,
    price: 99,
    url: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/The-stages-of-puppy-growth.jpg?itok=9ptPJwY8',
    album: "Cassio's Greatest Hits",
    artist: 'Eh Nois'
  },
  16: {
    name: 'Karens Least Favorite Songs',
    genre: 'DEATH METAL MOTHER F*****R',
    length: 210,
    price: 99,
    url: 'https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg',
    album: "Karen's Greatest Hits",
    artist: 'Karen and her Herps'
  },
})

const userSongs = seed(UserSong,
  ({
    users,
    songs
  }) => ({
    'goduser1': {
      user_id: users.god.id,
      song_id: songs.songFour.id
    },
    'goduser2': {
      user_id: users.god.id,
      song_id: songs.songFive.id
    },
    'goduser3': {
      user_id: users.god.id,
      song_id: songs.songOne.id
    },
    'barackuser1': {
      user_id: users.barack.id,
      song_id: songs.songSeven.id
    },
    'barackuser2': {
      user_id: users.barack.id,
      song_id: songs.songTwo.id
    },
    'barackuser3': {
      user_id: users.barack.id,
      song_id: songs.songThree.id
    },
  }))

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
    email: 'Stan@letsGetziton.com',
    name: 'Stan Getz',
    password: 'secure345'
  },
  ken: {
    name: 'Ken Ramos',
    email: 'ken@letsGetziton.com',
    password: 'secure345'
  },
  alez: {
    email: 'alez@letsGetziton.com',
    name: 'Alex Gates',
    password: 'secure345'
  },
})
module.exports = Object.assign(seed, {
  users,
  songs,
  reviews,
  carts,
  userSongs
})
