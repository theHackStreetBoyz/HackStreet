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
import store, { getAllAlbums } from '../store'

class Albums extends Component {
  componentDidMount() {
    // store.dispatch(getAlbums)
  }

  render() {
    const albums = this.props
    return (
      <div>
        <h3>Albums</h3>
        <div className="list-albums">
        {
            albums.map(album => (
            <div className="col-xs-4" key={ album.id }>

                <div className="caption">
                  <h5>
                    <span>{ album.name }</span>
                  </h5>
                  <small>{ album.songs.length } songs</small>
                </div>

            </div>
          ))
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    albums: state.albums
  }
}

const albumsContainer = connect(mapStateToProps, null)(Albums)

export default albumsContainer
