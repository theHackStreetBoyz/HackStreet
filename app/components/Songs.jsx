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
import store from '../store.jsx'

class Songs extends Component {
  constructor(props) {
    super(props)
    this.handleBuy = this.handleBuy.bind(this)
  }
  componentDidMount() {
    this.props.loadAllSongs()
  }
  handleBuy(evt) {
    const songId = evt.target.value
    //console.log("props", this.props)
    //console.log(this.props.songs.filter(song => song.id == songId)[0])
    this.props.updateCart(this.props.auth.id, songId)
    // console.log(evt.target.value)
    // console.log('Hi dan')
    // this.addedSongs[songId] = true
    evt.target.setAttribute('disabled', 'disabled')
    evt.target.innerHTML = 'ADDED TO CART'
    this.render()
    // thunk to create new purchase from songId above
    // somehow update song button to show that it was added to cart
  }

  render() {
    const songs = this.props.songs
    // const cart = this.props.cart
    // console.log("cart", cart)
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
                  </tr>
                </thead>
                <tbody>
                  {
                    (songs && songs.map((song) => (
                        <tr key={song.id}>
                          <td>{song.name}</td>
                          <td>{song.artist}</td>
                          <td>{song.price}</td>
                          <td><button
                            value={song.id}
                            onClick={this.handleBuy}
                            type="submit"
                            className="btn btn-default">
                            ADD TO CART
                          </button></td>
                        </tr>
                      )
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    songs: state.songs,
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
      //console.log("mapping", userId, songId)
      dispatch(updatingCart(userId, songId))
    }
  }
}

const songsListContainer = connect(mapStateToProps, mapDispatchToProps)(Songs)

export default songsListContainer
