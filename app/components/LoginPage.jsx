'use strict'

/**
 * `babel-preset-env` converts this general import into a selection of specific
 * imports needed to polyfill the currently-supported environment (as specified
 * in `.babelrc`). As of 2017-06-04, this is primarily to support async/await.
 */
import 'babel-polyfill'

import React, { Component } from 'react'
// import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
// import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Login from './Login.jsx'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    console.log('LINTA')
  }

  componentWillUpdate() {
  }

  render() {
    const song = this.props.songs
    return (
       <div>
        <Login />
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
  }
}

const songsListContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage)

export default songsListContainer
