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

class Songs extends Component {
  render() {
    const songs = this.props.songs
    return (
      <div>
        <h3>Songs</h3>
        <div>
          <ul className="list-group">
          {
            songs.map((song) => {
              return (
                <div key={song.id}>
                  <li className="list-group-item">
                    <div> Name: { song.name } </div>
                    <div> Artist: { song.artist } </div>
                    <div> Price: { song.price } </div>
                  </li>
                </div>
              )
            })
            }
         </ul>
        </div>
      </div>
    );
  }
}

// Un-comment out when store is ready to connect:

const mapStateToProps = function(state) {
  return {
    songs: state.songs.songs
  };
};

const songsListContainer = connect(mapStateToProps, null)(Songs);

export default songsListContainer;




