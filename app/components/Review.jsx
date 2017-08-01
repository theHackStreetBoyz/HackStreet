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

import { fetchSingleSong } from '../reducers/songs'
import store from '../store.jsx'

class SingleSong extends Component {
  constructor(props) {
    super(props)
    this.renderStars = this.renderStars.bind(this)
  }
  componentDidMount() {
    this.props.loadSingleSong(this.props.match.params.id)
  }
  renderStars(num) {
    const empty = '☆'
    const filled = '★'
    let result = ''
    for (let i = 0; i < 5; i++) {
      if (i < num) result += filled
      else result += empty
    }
    return result
  }

  render() {
    <div>
    <h3>StarsL</h3>
    {this.renderStars}

    </div>
  }
}

const mapStateToProps = function(state, ownProps) {
  return {
    review: ownProps.review
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    loadSingleSong: (songId) => {
      dispatch(fetchSingleSong(songId))
    }
  }
}

const songsListContainer = connect(mapStateToProps, mapDispatchToProps)(SingleSong)

export default songsListContainer
