'use strict'

const db = require('APP/db')
    , {User, Thing, Favorite, Promise} = db
    , {mapValues} = require('lodash')

function seedEverything() {
  const seeded = {
    users: users(),
    things: things(),
  }

  seeded.favorites = favorites(seeded)

  return Promise.props(seeded)
}

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
})

const things = seed(Thing, {
  surfing: {name: 'surfing'},
  smiting: {name: 'smiting'},
  puppies: {name: 'puppies'},
})

/////  JSON SEED FILE ///////

{
   "@version": "1.0",
   "dict": {
      "key": [
         "Major Version",
         "Minor Version",
         "Application Version",
         "Date",
         "Features",
         "Show Content Ratings",
         "Library Persistent ID",
         "Tracks",
         "Playlists"
      ],
      "integer": [
         "1",
         "1",
         "5"
      ],
      "string": [
         "12.4.1.6",
         "956391D7ED2D5D06"
      ],
      "date": "2016-07-21T15:25:20Z",
      "true": [],
      "dict": {
         "key": [
            "7789",
            "7794",
            "7797",
            "7800",
            "7803",
            "7806",
            "7809",
            "7812",
            "7815",
            "7818",
            "7821",
            "7824",
            "7827",
            "7830",
            "7833",
            "7836",
            "7839",
            "7842",
            "7845",
            "7848",
            "7851",
            "7854",
            "7857",
            "7860",
            "7863",
            "7866",
            "7869",
            "7872",
            "7875",
            "7878",
            "7881",
            "7884",
            "7887",
            "7890",
            "7893",
            "7896",
            "7899",
            "7902",
            "7905",
            "7908",
            "7911",
            "7914",
            "7917",
            "7920"
         ],
         "dict": [
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Sort Name",
                  "Location"
               ],
               "integer": [
                  "7789",
                  "4724431",
                  "116897",
                  "1",
                  "12",
                  "2012",
                  "152",
                  "320",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:50:49Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "F6D9311437E30880",
                  "File",
                  "The Tea Party",
                  "Dexter Britain",
                  "Dexter Britain",
                  "Creative Commons Volume 2",
                  "Instrumental",
                  "MPEG audio file",
                  "Tea Party",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7794",
                  "5632447",
                  "139598",
                  "2",
                  "12",
                  "2012",
                  "320",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:50:49Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "9ED695133B1BA404",
                  "File",
                  "After Christmas",
                  "Dexter Britain",
                  "Dexter Britain",
                  "Creative Commons Volume 2",
                  "Instrumental",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/02%20After%20Christmas.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7797",
                  "6338798",
                  "157257",
                  "3",
                  "12",
                  "2012",
                  "94",
                  "320",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:50:49Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "86332E2800E0F48B",
                  "File",
                  "My Song For January",
                  "Dexter Britain",
                  "Dexter Britain",
                  "Creative Commons Volume 2",
                  "Instrumental",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/03%20My%20Song%20For%20January.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7800",
                  "3170667",
                  "78053",
                  "4",
                  "12",
                  "2012",
                  "120",
                  "320",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:50:49Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "09C1313858280F87",
                  "File",
                  "Notebook Reading",
                  "Dexter Britain",
                  "Dexter Britain",
                  "Creative Commons Volume 2",
                  "Instrumental",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/04%20Notebook%20Reading.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7803",
                  "4838324",
                  "148349",
                  "5",
                  "12",
                  "2012",
                  "114",
                  "258",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:50:49Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "670BCC5A85F48CD0",
                  "File",
                  "Seeing The Future",
                  "Dexter Britain",
                  "Dexter Britain",
                  "Creative Commons Volume 2",
                  "Instrumental",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/05%20Seeing%20The%20Future.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7806",
                  "6341306",
                  "196649",
                  "6",
                  "12",
                  "2012",
                  "94",
                  "256",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:50:49Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "0198730895174D77",
                  "File",
                  "Summers Coming",
                  "Dexter Britain",
                  "Dexter Britain",
                  "Creative Commons Volume 2",
                  "Instrumental",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/06%20Summers%20Coming.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7809",
                  "4822651",
                  "198922",
                  "7",
                  "12",
                  "2012",
                  "70",
                  "192",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:50:50Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "BB79F686C23C852F",
                  "File",
                  "Nights Tale",
                  "Dexter Britain",
                  "Dexter Britain",
                  "Creative Commons Volume 2",
                  "Instrumental",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/07%20Nights%20Tale.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7812",
                  "8876855",
                  "220708",
                  "8",
                  "12",
                  "2012",
                  "124",
                  "320",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:50:50Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "C9A34AB4EAF05A28",
                  "File",
                  "Leave Well Enough Alone (Instrumental)",
                  "Dexter Britain",
                  "Dexter Britain",
                  "Creative Commons Volume 2",
                  "Instrumental",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/08%20Leave%20Well%20Enough%20Alone%20(Instrumental).mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7815",
                  "8808937",
                  "219010",
                  "9",
                  "12",
                  "2012",
                  "80",
                  "320",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:50:50Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "4BF57C4CAA8936F3",
                  "File",
                  "Stop It (Instrumental)",
                  "Dexter Britain",
                  "Dexter Britain",
                  "Creative Commons Volume 2",
                  "Instrumental",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/09%20Stop%20It%20(Instrumental).mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7818",
                  "8883125",
                  "220865",
                  "10",
                  "12",
                  "2012",
                  "125",
                  "320",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:50:50Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "182CAD82B558588F",
                  "File",
                  "Waking Up (Instrumental)",
                  "Dexter Britain",
                  "Dexter Britain",
                  "Creative Commons Volume 2",
                  "Instrumental",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/10%20Waking%20Up%20(Instrumental).mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7821",
                  "8089002",
                  "201012",
                  "11",
                  "12",
                  "2012",
                  "126",
                  "320",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:50:50Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "ACF1D2593BD168E9",
                  "File",
                  "Wonderland (Instrumental)",
                  "Dexter Britain",
                  "Dexter Britain",
                  "Creative Commons Volume 2",
                  "Instrumental",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/11%20Wonderland%20(Instrumental).mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7824",
                  "8482929",
                  "210860",
                  "12",
                  "12",
                  "2012",
                  "76",
                  "320",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:50:51Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "FD777595FE547B30",
                  "File",
                  "After The Week I've Had",
                  "Dexter Britain",
                  "Dexter Britain",
                  "Creative Commons Volume 2",
                  "Instrumental",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/12%20After%20The%20Week%20I've%20Had.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7827",
                  "10304850",
                  "253544",
                  "1",
                  "3",
                  "2013",
                  "320",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:48:12Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "91F60B5F8A105E41",
                  "File",
                  "Shooting Star",
                  "Dexter Britain",
                  "Dexter Britain",
                  "Zenith",
                  "Instrumental",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Zenith/01%20Shooting%20Star.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Sort Name",
                  "Location"
               ],
               "integer": [
                  "7830",
                  "6615316",
                  "161306",
                  "2",
                  "3",
                  "2013",
                  "320",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:48:12Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "634E12A0268C38E1",
                  "File",
                  "The Stars Are Out",
                  "Dexter Britain",
                  "Dexter Britain",
                  "Zenith",
                  "Instrumental",
                  "MPEG audio file",
                  "Stars Are Out",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Zenith/02%20The%20Stars%20Are%20Out.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Sort Name",
                  "Location"
               ],
               "integer": [
                  "7833",
                  "4365778",
                  "105064",
                  "3",
                  "3",
                  "2013",
                  "320",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:48:12Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "196A1FE8C33C4C7A",
                  "File",
                  "The Stars Are Out (Interlude)",
                  "Dexter Britain",
                  "Dexter Britain",
                  "Zenith",
                  "Instrumental",
                  "MPEG audio file",
                  "Stars Are Out (Interlude)",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Zenith/03%20The%20Stars%20Are%20Out%20(Interlude).mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7836",
                  "8939426",
                  "277080",
                  "1",
                  "10",
                  "2009",
                  "254",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:04:24Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "474BC601B67D46F2",
                  "File",
                  "I Should Be Born (Instrumental)",
                  "Jets Overhead",
                  "Jets Overhead",
                  "No Nations (Instrumentals)",
                  "Rock",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Jets%20Overhead/No%20Nations%20(Instrumentals)/01%20I%20Should%20Be%20Born%20(Instrumental).mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7839",
                  "6887689",
                  "240117",
                  "2",
                  "10",
                  "2009",
                  "224",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:04:24Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "176C585671AA3AFB",
                  "File",
                  "Heading For Nowhere (Instrumental)",
                  "Jets Overhead",
                  "Jets Overhead",
                  "No Nations (Instrumentals)",
                  "Rock",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Jets%20Overhead/No%20Nations%20(Instrumentals)/02%20Heading%20For%20Nowhere%20(Instrumental).mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7842",
                  "8600040",
                  "277106",
                  "3",
                  "10",
                  "2009",
                  "244",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:04:24Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "BB00B579E001C2DF",
                  "File",
                  "Weathervanes (Instrumental)",
                  "Jets Overhead",
                  "Jets Overhead",
                  "No Nations (Instrumentals)",
                  "Rock",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Jets%20Overhead/No%20Nations%20(Instrumentals)/03%20Weathervanes%20(Instrumental).mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7845",
                  "7194889",
                  "244035",
                  "4",
                  "10",
                  "2009",
                  "231",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:04:24Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "F3C5675898A28DBF",
                  "File",
                  "No Nations (Instrumental)",
                  "Jets Overhead",
                  "Jets Overhead",
                  "No Nations (Instrumentals)",
                  "Rock",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Jets%20Overhead/No%20Nations%20(Instrumentals)/04%20No%20Nations%20(Instrumental).mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7848",
                  "6810218",
                  "211043",
                  "5",
                  "10",
                  "2009",
                  "252",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:04:24Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "F4779A7555F07141",
                  "File",
                  "Sure Sign (Instrumental)",
                  "Jets Overhead",
                  "Jets Overhead",
                  "No Nations (Instrumentals)",
                  "Rock",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Jets%20Overhead/No%20Nations%20(Instrumentals)/05%20Sure%20Sign%20(Instrumental).mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7851",
                  "7871615",
                  "261198",
                  "6",
                  "10",
                  "2009",
                  "236",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:04:25Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "582C06806A9E314E",
                  "File",
                  "Time Will Remember (Instrumental)",
                  "Jets Overhead",
                  "Jets Overhead",
                  "No Nations (Instrumentals)",
                  "Rock",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Jets%20Overhead/No%20Nations%20(Instrumentals)/06%20Time%20Will%20Remember%20(Instrumental).mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7854",
                  "10833571",
                  "332068",
                  "7",
                  "10",
                  "2009",
                  "257",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:04:25Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "DBFA3BE0B3500840",
                  "File",
                  "Fully Shed (Instrumental)",
                  "Jets Overhead",
                  "Jets Overhead",
                  "No Nations (Instrumentals)",
                  "Rock",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Jets%20Overhead/No%20Nations%20(Instrumentals)/07%20Fully%20Shed%20(Instrumental).mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7857",
                  "6023194",
                  "181002",
                  "8",
                  "10",
                  "2009",
                  "260",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:04:25Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "519012508BF3B798",
                  "File",
                  "Always A First Time (Instrumental)",
                  "Jets Overhead",
                  "Jets Overhead",
                  "No Nations (Instrumentals)",
                  "Rock",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Jets%20Overhead/No%20Nations%20(Instrumentals)/08%20Always%20A%20First%20Time%20(Instrumental).mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7860",
                  "8546396",
                  "292127",
                  "9",
                  "10",
                  "2009",
                  "230",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:04:25Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "F8767C3FA50BC8E9",
                  "File",
                  "It's A Funny Thing (Instrumental)",
                  "Jets Overhead",
                  "Jets Overhead",
                  "No Nations (Instrumentals)",
                  "Rock",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Jets%20Overhead/No%20Nations%20(Instrumentals)/09%20It's%20A%20Funny%20Thing%20(Instrumental).mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Album Artist",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7863",
                  "11888929",
                  "404453",
                  "10",
                  "10",
                  "2009",
                  "232",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:04:25Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "F11FBF4CA7030472",
                  "File",
                  "Tired Of The Comfort (Instrumental)",
                  "Jets Overhead",
                  "Jets Overhead",
                  "No Nations (Instrumentals)",
                  "Rock",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Jets%20Overhead/No%20Nations%20(Instrumentals)/10%20Tired%20Of%20The%20Comfort%20(Instrumental).mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7866",
                  "3850720",
                  "168192",
                  "1",
                  "1",
                  "1",
                  "9",
                  "2008",
                  "179",
                  "48000",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:01:51Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "A721FAC0AEE6F42A",
                  "File",
                  "1 Ghosts I",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "Ghosts I-IV",
                  "Ambient",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/Ghosts%20I-IV/01%201%20Ghosts%20I.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7869",
                  "4209568",
                  "197232",
                  "1",
                  "1",
                  "2",
                  "9",
                  "2008",
                  "168",
                  "48000",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:01:47Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "C88190FDC2C3EDE8",
                  "File",
                  "2 Ghosts I",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "Ghosts I-IV",
                  "Ambient",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/Ghosts%20I-IV/02%202%20Ghosts%20I.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7872",
                  "6135808",
                  "231024",
                  "1",
                  "1",
                  "3",
                  "9",
                  "2008",
                  "210",
                  "48000",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:01:42Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "2E5E51578C24E7EA",
                  "File",
                  "3 Ghosts I",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "Ghosts I-IV",
                  "Ambient",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/Ghosts%20I-IV/03%203%20Ghosts%20I.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7875",
                  "3385120",
                  "131520",
                  "1",
                  "1",
                  "4",
                  "9",
                  "2008",
                  "201",
                  "48000",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:01:38Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "825597DF6701008C",
                  "File",
                  "4 Ghosts I",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "Ghosts I-IV",
                  "Ambient",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/Ghosts%20I-IV/04%204%20Ghosts%20I.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7878",
                  "3786496",
                  "173568",
                  "1",
                  "1",
                  "5",
                  "9",
                  "2008",
                  "171",
                  "48000",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:01:33Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "D31B368699971824",
                  "File",
                  "5 Ghosts I",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "Ghosts I-IV",
                  "Ambient",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/Ghosts%20I-IV/05%205%20Ghosts%20I.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7881",
                  "5633104",
                  "258480",
                  "1",
                  "1",
                  "6",
                  "9",
                  "2008",
                  "172",
                  "48000",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:01:29Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "7278916F6ACDB9BA",
                  "File",
                  "6 Ghosts I",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "Ghosts I-IV",
                  "Ambient",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/Ghosts%20I-IV/06%206%20Ghosts%20I.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7884",
                  "3124480",
                  "120576",
                  "1",
                  "1",
                  "7",
                  "9",
                  "2008",
                  "202",
                  "48000",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:01:24Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "E59F07E7EA9FE847",
                  "File",
                  "7 Ghosts I",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "Ghosts I-IV",
                  "Ambient",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/Ghosts%20I-IV/07%207%20Ghosts%20I.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7887",
                  "4107040",
                  "175560",
                  "1",
                  "1",
                  "8",
                  "9",
                  "2008",
                  "184",
                  "48000",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:01:19Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "806EA710B9A2A9B4",
                  "File",
                  "8 Ghosts I",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "Ghosts I-IV",
                  "Ambient",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/Ghosts%20I-IV/08%208%20Ghosts%20I.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Location"
               ],
               "integer": [
                  "7890",
                  "3923680",
                  "167160",
                  "1",
                  "1",
                  "9",
                  "9",
                  "2008",
                  "184",
                  "48000",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T08:01:14Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "BC361D6652A13042",
                  "File",
                  "9 Ghosts I",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "Ghosts I-IV",
                  "Ambient",
                  "MPEG audio file",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/Ghosts%20I-IV/09%209%20Ghosts%20I.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Sort Album",
                  "Location"
               ],
               "integer": [
                  "7893",
                  "2356828",
                  "85133",
                  "1",
                  "1",
                  "1",
                  "10",
                  "2008",
                  "216",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T07:54:49Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "3827CB5D0AF6AABA",
                  "File",
                  "999,999",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "The Slip",
                  "Industrial",
                  "MPEG audio file",
                  "Slip",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/The%20Slip/01%20999,999.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Sort Album",
                  "Location"
               ],
               "integer": [
                  "7896",
                  "6638860",
                  "236199",
                  "1",
                  "1",
                  "2",
                  "10",
                  "2008",
                  "136",
                  "222",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T07:54:49Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "05A619C76C30AE96",
                  "File",
                  "1,000,000",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "The Slip",
                  "Industrial",
                  "MPEG audio file",
                  "Slip",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/The%20Slip/02%201,000,000.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Sort Album",
                  "Location"
               ],
               "integer": [
                  "7899",
                  "8093952",
                  "229511",
                  "1",
                  "1",
                  "3",
                  "10",
                  "2008",
                  "91",
                  "280",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T07:54:49Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "419E75D3A99785B4",
                  "File",
                  "Letting You",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "The Slip",
                  "Industrial",
                  "MPEG audio file",
                  "Slip",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/The%20Slip/03%20Letting%20You.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Sort Album",
                  "Location"
               ],
               "integer": [
                  "7902",
                  "8337817",
                  "259186",
                  "1",
                  "1",
                  "4",
                  "10",
                  "2008",
                  "122",
                  "255",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T07:54:49Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "4E60D7628630BB78",
                  "File",
                  "Discipline",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "The Slip",
                  "Industrial",
                  "MPEG audio file",
                  "Slip",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/The%20Slip/04%20Discipline.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Sort Album",
                  "Location"
               ],
               "integer": [
                  "7905",
                  "8703453",
                  "285231",
                  "1",
                  "1",
                  "5",
                  "10",
                  "2008",
                  "124",
                  "242",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T07:54:49Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "BF7D0298FEB85B48",
                  "File",
                  "Echoplex",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "The Slip",
                  "Industrial",
                  "MPEG audio file",
                  "Slip",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/The%20Slip/05%20Echoplex.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Sort Album",
                  "Location"
               ],
               "integer": [
                  "7908",
                  "9095450",
                  "295471",
                  "1",
                  "1",
                  "6",
                  "10",
                  "2008",
                  "122",
                  "244",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T07:54:50Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "F7109125D5D26475",
                  "File",
                  "Head Down",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "The Slip",
                  "Industrial",
                  "MPEG audio file",
                  "Slip",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/The%20Slip/06%20Head%20Down.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Sort Album",
                  "Location"
               ],
               "integer": [
                  "7911",
                  "4490576",
                  "209632",
                  "1",
                  "1",
                  "7",
                  "10",
                  "2008",
                  "55",
                  "169",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T07:54:50Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "0869AA797C8AF9F6",
                  "File",
                  "Lights in the Sky",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "The Slip",
                  "Industrial",
                  "MPEG audio file",
                  "Slip",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/The%20Slip/07%20Lights%20in%20the%20Sky.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Sort Album",
                  "Location"
               ],
               "integer": [
                  "7914",
                  "12220706",
                  "453694",
                  "1",
                  "1",
                  "8",
                  "10",
                  "2008",
                  "55",
                  "214",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T07:54:50Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "E52863BD50AB76BC",
                  "File",
                  "Corona Radiata",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "The Slip",
                  "Industrial",
                  "MPEG audio file",
                  "Slip",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/The%20Slip/08%20Corona%20Radiata.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Sort Name",
                  "Sort Album",
                  "Location"
               ],
               "integer": [
                  "7917",
                  "8241771",
                  "277629",
                  "1",
                  "1",
                  "9",
                  "10",
                  "2008",
                  "83",
                  "235",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T07:54:50Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "8FF6BC9E6347486D",
                  "File",
                  "The Four of Us are Dying",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "The Slip",
                  "Industrial",
                  "MPEG audio file",
                  "Four of Us are Dying",
                  "Slip",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/The%20Slip/09%20The%20Four%20of%20Us%20are%20Dying.mp3"
               ]
            },
            {
               "key": [
                  "Track ID",
                  "Size",
                  "Total Time",
                  "Disc Number",
                  "Disc Count",
                  "Track Number",
                  "Track Count",
                  "Year",
                  "BPM",
                  "Date Modified",
                  "Date Added",
                  "Bit Rate",
                  "Sample Rate",
                  "Artwork Count",
                  "Persistent ID",
                  "Track Type",
                  "File Folder Count",
                  "Library Folder Count",
                  "Name",
                  "Artist",
                  "Composer",
                  "Album",
                  "Genre",
                  "Kind",
                  "Sort Album",
                  "Location"
               ],
               "integer": [
                  "7920",
                  "9350055",
                  "299493",
                  "1",
                  "1",
                  "10",
                  "10",
                  "2008",
                  "132",
                  "248",
                  "44100",
                  "1",
                  "5",
                  "1"
               ],
               "date": [
                  "2016-02-08T07:54:51Z",
                  "2016-07-21T15:25:12Z"
               ],
               "string": [
                  "1C6087D74E1F930B",
                  "File",
                  "Demon Seed",
                  "Nine Inch Nails",
                  "Trent Reznor",
                  "The Slip",
                  "Industrial",
                  "MPEG audio file",
                  "Slip",
                  "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Nine%20Inch%20Nails/The%20Slip/10%20Demon%20Seed.mp3"
               ]
            }
         ]
      },
      "array": []
   }
}

///////////////////






const favorites = seed(Favorite,
  // We're specifying a function here, rather than just a rows object.
  // Using a function lets us receive the previously-seeded rows (the seed
  // function does this wiring for us).
  //
  // This lets us reference previously-created rows in order to create the join
  // rows. We can reference them by the names we used above (which is why we used
  // Objects above, rather than just arrays).
  ({users, things}) => ({
    // The easiest way to seed associations seems to be to just create rows
    // in the join table.
    'obama loves surfing': {
      user_id: users.barack.id,    // users.barack is an instance of the User model
                                   // that we created in the user seed above.
                                   // The seed function wires the promises so that it'll
                                   // have been created already.
      thing_id: things.surfing.id  // Same thing for things.
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
    .then(() => db.sync({force: true}))
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
  return (others={}) => {
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
                  .catch(error => { throw new BadRow(key, row, error) })
                )
            }
          }).reduce(
            (all, one) => Object.assign({}, all, {[one.key]: one.value}),
            {}
          )
        )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

module.exports = Object.assign(seed, {users, things, favorites})
