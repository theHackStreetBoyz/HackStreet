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
import { fetchCart, deleteASong } from '../reducers/cart'
import store from '../store.jsx'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleDelete = this.handleDelete.bind(this)
    this.handleCheckout = this.handleCheckout.bind(this)
  }

  componentWillMount() {
    this.props.loadCart()
  }
  handleCheckout() {
    this.props.history.push('/checkout')
  }

  handleDelete(song_id) {
    const auth = this.props.auth
    this.props.deleteASong(auth.user.id, song_id)
  }

  render() {
    let totalPrice = 0
    const cart = this.props.cart
    const auth = this.props.auth

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
                      totalPrice += (+song.price)
                      return (
                        <tr key={song.id}>
                          <td>{song.name}</td>
                          <td>{song.artist}</td>
                          <td>{song.price}</td>
                          <td>
                            <button
                            type="delete"
                            className="btn btn-primary"
                            onClick={() => this.handleDelete(song.id)}>
                            X
                          </button>
                          </td>
                        </tr>
                      )
                    }
                  ))}
                </tbody>
              </table>
            </div>
            <h2>{`Total Price: $${totalPrice.toFixed(2)}`}</h2>
            {this.props.nested? null : (<button onClick={this.handleCheckout}>Proceed to Checkout</button>)}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state, ownProps) {
  return {
    nested: ownProps.nested,
    songs: state.songs,
    auth: state.auth,
    cart: state.cart,
    history: ownProps.history,
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    loadCart: () => {
      dispatch(fetchCart())
    },
    deleteASong: (user_id, song_id) => {
      dispatch(deleteASong(user_id, song_id))
    }
  }
}

const cartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default cartContainer
