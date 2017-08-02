'use strict'

/**
 * `babel-preset-env` converts this general import into a selection of specific
 * imports needed to polyfill the currently-supported environment (as specified
 * in `.babelrc`). As of 2017-06-04, this is primarily to support async/await.
 */
import 'babel-polyfill'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { fetchSingleSong } from '../reducers/songs'
import { fetchReviewsForSong} from '../reducers/reviews'
import store from '../store.jsx'

class SingleSong extends Component {
  componentDidMount() {
    this.props.loadSingleSong(this.props.match.params.id)
    this.props.loadSongReviews(this.props.match.params.id)
  }

  render() {
    const song = this.props.songs
    const reviews = this.props.reviews
    // console.log('Props', this.props)
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
                  <tr>
                    <td>{song.name}</td>
                    <td>{song.artist}</td>
                    <td>{song.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>REVIEWS:</div>
            <div className='row'>
            <div className='col-md-12'>
              <table className="table table-responsive table-striped table-hover table-sm">
                <thead>
                  <tr className="row m-0">
                    <th className="d-inline-block">Stars</th>
                    <th className="d-inline-block ">Text</th>
                    <th className="d-inline-block ">User Id</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    (Array.isArray(reviews) && reviews.map((review) => (
                      <tr key={review.id}>
                        <td>{review.stars}</td>
                        <td>{review.text}</td>
                        <td>{review.id}</td>
                    </tr>
                  )))} 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state, ownProps) {
  return {
    songs: state.songs,
    auth: state.auth,
    reviews: state.reviews
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    loadSingleSong: (songId) => {
      dispatch(fetchSingleSong(songId))
    },
    loadSongReviews: (songId) => {
      dispatch(fetchReviewsForSong(songId))
    }
  }
}

const songsListContainer = connect(mapStateToProps, mapDispatchToProps)(SingleSong)

export default songsListContainer
