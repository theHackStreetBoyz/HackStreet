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

import { fetchSingleSong } from '../reducers/songs'
import store from '../store.jsx'



class SingleSong extends Component {
    constructor (props) {
        super(props);
        //this.state = store.getState()
    }

    componentDidMount () {
        //console.log(this.state)
        //console.log(this.props.match.params.id, this.state)
        this.props.loadSingleSong(2)
    }


  render() {
    const song = this.props.songs
    console.log("hi", song)
    return (
       <div>
        <div className="container">
        <h3>Single Song</h3>
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
                  <tr key={song.id}>
                    <td>{ song[0] }</td>
                    <td>{ song.artist }</td>
                    <td>{ song.price }</td>
                  </tr>
        </tbody>
        </table>
        </div>
        </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = function(state) {
    return {
      songs: state.songs,
      auth: state.auth
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    loadSingleSong: (songId) => {
      dispatch(fetchSingleSong(songId))
    }
  }
}

const songsListContainer = connect(mapStateToProps, mapDispatchToProps)(SingleSong);

export default songsListContainer;