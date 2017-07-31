'use strict'

/**
 * `babel-preset-env` converts this general import into a selection of specific
 * imports needed to polyfill the currently-supported environment (as specified
 * in `.babelrc`). As of 2017-06-04, this is primarily to support async/await.
 */
import 'babel-polyfill'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// import Recommeneded from './Recommended'

class Home extends Component {
  render() {
    const songs = this.props.songs
    return (
      <div>
        <h3>HomePage</h3>
        <div>
          <ul className="list-group">
            {
              (songs && songs.map((song) => {
                if (song.genre === 'Rock') {
                  return (
                    <div key={song.id}>
                      <li className="list-group-item">
                        <div> Name: {song.name} </div>
                        <div> Artist: {song.artist} </div>
                        <div> Price: {song.price} </div>
                      </li>
                    </div>
                  )
                }
              }))
            }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  if (state.songs) {
    return {
      songs: state.songs
    }
  }
}

const HomeContainer = connect(mapStateToProps, null)(Home)

export default HomeContainer
