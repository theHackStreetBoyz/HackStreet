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

import Home from './Home'
import Songs from './Songs'
import Navbar from './Navbar'
import Cart from './Cart'
import Footer from './Footer'
import Login from './Login'
import SingleUser from './SingleUser'
import SingleSong from './SingleSong'
import CompanyInfo from './CompanyInfo'
import Support from './Support'

import { fetchSongs } from '../reducers/songs'
import store from '../store.jsx'

export default class Main extends Component {
  constructor(props) {
      super(props)
    }

  componentDidMount() {
      store.dispatch(fetchSongs())

        // store.dispatch(fetchUser())
    }

    render() {
        return (
            <Router>
            <div>
                <div>
                    <Navbar className="navbar-nav" />
                </div>
                <Switch>
                    <Route path='/user' component={SingleUser} />
                    <Route path='/login' component={Login} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/songs' component={Songs} />
                    <Route path='/singlesong' component={SingleSong} />
                    <Route path='/companyinfo' component={CompanyInfo} />
                    <Route path='/support' component={Support} />
                    <Route path='/' component={Home} />
                </Switch>
                <Footer/>
            </div>
            </Router>
        )
    }
}
