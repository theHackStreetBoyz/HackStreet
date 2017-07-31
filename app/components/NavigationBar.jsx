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
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

const NavigationBar = () => (
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
    </Nav>
    </Navbar>
  )

export default NavigationBar
