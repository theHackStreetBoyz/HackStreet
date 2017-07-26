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


export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <Navbar className="navbar-nav"/>
                </div>
                <Switch>
                    <Route path='/artists' component={Artists} />
                    <Route path='/albums' component={Albums} />
                    <Route path='/songs' component={Songs} />
                    <Route path='/' component={Home} />
                </Switch>
            </div>
        )
    }
}
