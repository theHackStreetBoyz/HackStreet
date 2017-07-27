'use strict'

/**
 * `babel-preset-env` converts this general import into a selection of specific
 * imports needed to polyfill the currently-supported environment (as specified
 * in `.babelrc`). As of 2017-06-04, this is primarily to support async/await.
 */
import 'babel-polyfill'

import React, { Component } from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

const fakeSongs = [
    {
    name: 'Darryns Anthem',
    genre: 'Rock',
    length: 180,
    price: 0.99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Darryn's Greatest Hits",
    artist: "The Deadly Darryn's"
  },
  {
    name: 'Maxs Anthem',
    genre: 'Jazz',
    length: 190,
    price: 0.99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Max's Greatest Hits",
    artist: "The Miraculous Max's"
  },
  {
    name: 'Dans Anthem',
    genre: 'Punk',
    length: 200,
    price: 0.99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Dan's Greatest Hits",
    artist: 'Manganesey Dan'
  },
  {
    name: 'Karens Anthem',
    genre: 'DEATH METAL MOTHER F*****R',
    length: 210,
    price: 0.99,
    url: 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
    album: "Alvin's Greatest Hits",
    artist: 'Alvin and his Chipmunks'
  }
]

export default class Songs extends Component {
  constructor(){
    super();
    this.state = {
      songs: fakeSongs
    }
  }

  render() {
      let songs = this.state.songs;

    return (
      <div>
        <h3>Songs</h3>
        <div className="list-songs">
          <h2>NAME   ARTIST   PRICE</h2>
          <ul class="list-group">
            {Array.isArray(songs) && songs.map( (song) => {
              return (
                <div key={song.id}>
                <li class="list-group-item">
                <div id="">
                <div> { song.name } </div>
                <div> Artist: { song.artist } </div>
                </div>
                </li>
                </div>
              )
            })}
         </ul>
        </div>
      </div>
    );
  }
}

// Un-comment out when store is ready to connect:

// const mapStateToProps = function (state) {
//   return {
//     songs: state.songs
//   };
// };

// const songsListContainer = connect( mapStateToProps, null )(Songs);

// export default songsListContainer;

//////  BELOW IS BACKUP OF NAVBAR ///////

'use strict'

/**
 * `babel-preset-env` converts this general import into a selection of specific
 * imports needed to polyfill the currently-supported environment (as specified
 * in `.babelrc`). As of 2017-06-04, this is primarily to support async/await.
 */
import 'babel-polyfill'

import React, { Component } from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom'



const Navbar = () => {

  return (
    <navbar>
      <section>
        <h4 className="menu-item active nav-item nav-link">
          <Link to="/albums">Albums</Link>
        </h4>
        <h4 className="menu-item active nav-item nav-link">
          <Link to="/artists">Artists</Link>
        </h4>
        <h4 className="menu-item active nav-item nav-link">
          <Link to="/songs">Songs</Link>
        </h4>
        <h4 className="menu-item active nav-item nav-link">
          <Link to="/cart">Cart</Link>
        </h4>
        <button>
          <Link to="/login">Login</Link>
        </button>
      </section>
    </navbar>
  );
};

export default Navbar;
