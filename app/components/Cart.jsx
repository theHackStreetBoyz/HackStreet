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
import { fetchCart } from '../reducers/cart'
import store from '../store.jsx'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  componentDidMount() {
    this.props.loadCart(1)
  }

  render() {
    let totalPrice = 0
    let cart = this.props.cart
    console.log("pt.s", cart)
    return (
      <div>
        <div className="container">
          <h3>Cart</h3>
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
                    (Array.isArray(cart) && cart.map((song) => {
                      totalPrice += (+song.price)/100
                      return (
                        <tr key={song.id}>
                          <td>{song.name}</td>
                          <td>{song.artist}</td>
                          <td>{song.price}</td>
                        </tr>
                      )
                    }
                    ))} 
                </tbody>
              </table>
            </div>
            <h2>{`Total Price: $${totalPrice}`}</h2>
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
    loadCart: (userId) => {
      dispatch(fetchCart(userId))
    }
  }
}

const cartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default cartContainer