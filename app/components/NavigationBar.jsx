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
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Logout from './Logout'

export class NavigationBar extends Component {
  constructor(props) {
    super(props)
    this.loggedIn = true
  }
  render() {
    this.loggedIn = !!this.props.auth
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">HackStreet Store</a>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav>
          <NavItem eventKey={1} href="/user">Account</NavItem>
          <NavItem eventKey={2} href="/cart">Cart</NavItem>
          <NavItem eventKey={3} href="/login">Login</NavItem>
          <NavItem eventKey={4} href="/logout">Logout</NavItem>
          <NavItem eventKey={5} href="/signup">SignUp</NavItem>
        </Nav>
      </Navbar>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = function(dispatch) {
  return {}
}

const songsListContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationBar)

export default songsListContainer
