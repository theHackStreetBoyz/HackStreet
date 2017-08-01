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
import { creatingPurchase } from '../reducers/auth'
import store from '../store.jsx'
import Cart from './cart.jsx'

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.handleBrowse = this.handleBrowse.bind(this)
    this.completePurchase = this.completePurchase.bind(this)
    // this.state = store.getState()
  }

  handleBrowse() {
    this.props.history.push('/')
  }
  completePurchase(){
    console.log(this.props.cart)
    this.props.creatingPurchase(this.props.cart)
  }

  render() {
    return (
      <div>
          <h2>Checkout:</h2>
          <Cart nested={true}/>
          <h3>Payment:</h3>
            <div />
          <button onClick={this.handleBrowse}>Back to Browse</button>
          <button onClick={this.completePurchase}>Complete Purchase</button>
      </div>
    )
  }
}

const mapStateToProps = function(state, ownProps) {
  return {
    songs: state.songs,
    auth: state.auth,
    cart: state.cart,
    history: ownProps.history
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    loadCart: () => {
      dispatch(fetchCart())
    },
    creatingPurchase: (cart) => {
      dispatch(creatingPurchase(cart))
    }
  }
}

const cartContainer = connect(mapStateToProps, mapDispatchToProps)(Checkout)

export default cartContainer
