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

import { fetchSongs } from '../reducers/songs'
import { updatingCart } from '../reducers/cart'
import { fetchReviews } from '../reducers/reviews'
import store from '../store.jsx'

class Songs extends Component {
  constructor(props) {
    super(props)
    this.handleBuy = this.handleBuy.bind(this)
    this.renderStars = this.renderStars.bind(this)
    this.getReviews = this.getReviews.bind(this)
    this.viewSong = this.viewSong.bind(this)
  }
  componentDidMount() {
    this.props.loadAllSongs()
    this.props.loadAllReviews()
  }

  handleBuy(evt) {
    const songId = evt.target.value
    this.props.updateCart(this.props.auth.user.id, songId)
    evt.target.setAttribute('disabled', 'disabled')
    evt.target.innerHTML = 'ADDED TO CART'
    this.render()
  }

  renderStars(num) {
    const empty = '☆'
    const filled = '★'
    let result = ''
    for (let i = 0; i < 5; i++) {
      if (i < num) result += filled
      else result += empty
    }
    return result
  }

  getReviews(reviews) {
    const result = {}
    reviews.forEach(review => {
      let current = result[review.song_id]
      if (current) current.push(review.stars)
      else {
        current = [review.stars]
      }
    })
    result.forEach(songReviews => {
      songReviews = songReviews.reduce((a, b) => a + b)/songReviews.length
    })
    return result
  }

  viewSong(songId){
    this.props.history.push(`/songs/${songId}`)
  }

  render() {
    const songs = this.props.songs
    console.log('REVIEWS: ', this.props)
    // const songReviews = this.getReviews(this.props.reviews)
    return (
      <div>
        <div className="container">
          <h3>Songs</h3>
          <div className='row'>
            <div className='col-md-12'>
              <table className="table table-responsive table-striped table-hover table-sm">
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>ARTIST</th>
                    <th>PRICE</th>
                    <th>AVERAGE STARS</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    (songs && songs.map((song) => (
                        <tr key={song.id}>
                          <td>{song.name}</td>
                          <td>{song.artist}</td>
                          <td>{song.price}</td>
                          <td> 
                            <button
                              value={song.id}
                              onClick={()=> this.viewSong(song.id)}
                              type="submit"
                              className="btn btn-default">
                              VIEW {song.name}
                              </button>
                          </td>
                          {/* <td>{this.renderStars(songReviews[song.id])}</td> */}
                          {(this.props.nested) ? <td></td>
                          : <td>
                              <button
                              value={song.id}
                              onClick={this.handleBuy}
                              type="submit"
                              className="btn btn-default">
                              ADD TO CART
                              </button>
                          </td>
                          }
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
  console.log('STATE IN PROPS: ', state)
  const songs = ownProps.songs || state.songs
  const nested = ownProps.nested

  return {
    reviews: state.reviews,
    nested,
    songs,
    auth: state.auth,
    cart: state.cart
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    loadAllSongs: () => {
      dispatch(fetchSongs())
    },
    updateCart: (userId, songId) => {
      dispatch(updatingCart(userId, songId))
    },
    loadAllReviews: () => {
      dispatch(fetchReviews())
    }
  }
}

const songsListContainer = connect(mapStateToProps, mapDispatchToProps)(Songs)

export default songsListContainer
