import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Cart from './Cart.jsx'

export class Checkout extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(evt) {
    evt.preventDefault()
    console.log('AUTH: ', this)
    // call a thunk to make a purchase for the current user
  }
  render() {
    return (
      <div>
        <h1>Checkout: </h1>
        <div>

        </div>
          <div>
            <h3>Payment:</h3>
            <form onSubmit={this.handleSubmit}>
              <p>Stripe Here</p>
              <button type="submit">Submit</button>
            </form>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  console.log('STATE: ', state)
  return {
    auth: state.auth
  }
}
const mapDispatch = {}
const Container = connect(mapStateToProps, mapDispatch)(Checkout)
export default Container
