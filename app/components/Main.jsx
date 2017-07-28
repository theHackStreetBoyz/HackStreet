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
import Artists from './Artists'
import Albums from './Albums'
import Songs from './Songs'
import Navbar from './Navbar'
import Cart from './Cart'
import Footer from './Footer'
import Login from './Login'
<<<<<<< HEAD
<<<<<<< HEAD
import SingleSong from './SingleSong'
=======
import CompanyInfo from './CompanyInfo'
import Support from './Support'
>>>>>>> c858286128201696d9c66f64edfe4a4901b48bda
=======

import SingleSong from './SingleSong'
import CompanyInfo from './CompanyInfo'
import Support from './Support'
>>>>>>> cffa6a86ef4bbce5a9c123766bd44bac97511745

import { fetchSongs } from '../reducers/songs'
import store from '../store.jsx'


export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        console.log('songs')
        store.dispatch(fetchSongs())
        // store.dispatch(fetchUser())
    }

    render() {
        return (
            <div>
                <div>
                    <Navbar className="navbar-nav"/>
                </div>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/artists' component={Artists} />
                    <Route path='/albums' component={Albums} />
                    <Route path='/songs' component={Songs} />
<<<<<<< HEAD
<<<<<<< HEAD
                    <Route path='/songs/:id' component={SingleSong} />
=======
                    <Route path='/companyinfo' component={CompanyInfo} />
                    <Route path='/support' component={Support} />
>>>>>>> c858286128201696d9c66f64edfe4a4901b48bda
=======
                    <Route path='/songs/:id' component={SingleSong} />
                    <Route path='/companyinfo' component={CompanyInfo} />
                    <Route path='/support' component={Support} />
>>>>>>> cffa6a86ef4bbce5a9c123766bd44bac97511745
                    <Route path='/' component={Home} />
                </Switch>
                <Footer/>
            </div>
        )
    }
}
