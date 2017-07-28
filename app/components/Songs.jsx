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
        <div className="container">
        <h3>Songs</h3>
        <div className='row'>
          <div className='col-md-12'>
        <table className="table table-responsive table-striped table-hover table-sm">
            <thead>
              <tr className="row m-0">
                <th className="d-inline-block">NAME</th>
                <th className="d-inline-block ">ARTIST</th>
                <th className="d-inline-block ">PRICE</th>
              </tr>
            </thead>
            <tbody>
            {
              songs.map( (song) => {
              return (
                  <tr key={song.id}>
                    <td>{ song.name }</td>
                    <td>{ song.artist }</td>
                    <td>{ song.price }</td>
                  </tr>

              )
            })}

        </tbody>
        </table>
        </div>
        </div>
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




