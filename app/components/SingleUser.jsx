import React, { Component } from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
// import { fetchPurchases } from '../reducers/auth'
import { fetchUserSongs } from '../reducers/userSongs'

import Songs from './Songs.jsx'

class SingleUser extends Component {

  componentWillMount() {
    this.props.intializeData()
  }

  render() {

    return (
      <div>
        <h1>User:</h1>
        <div>
          <h3>Name:</h3>
            <p>{ this.props.auth.user ? this.props.auth.user.name : null }</p>
        </div>
        <div>
          <h3>Email:</h3>
            <p>{ this.props.auth.user ? this.props.auth.user.email : null }</p>
        </div>
          <h3>WhoAmI(User Id):</h3>
           <p>{ this.props.auth.user ? this.props.auth.user.id : null } </p>

          <h3>List of Songs</h3>
          <Songs songs={this.props.userSongs.songs} nested={true} />
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    auth: state.auth,
    userSongs: state.userSongs
  }
}

const mapStateToDispatch = function(dispatch) {
  return {
    intializeData: () => {
     // dispatch(fetchPurchases())
      dispatch(fetchUserSongs())
    }
  }
}

const userContainer = connect(mapStateToProps, mapStateToDispatch)(SingleUser)

export default userContainer
