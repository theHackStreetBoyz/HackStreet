import React, { Component } from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { fetchUserSongs } from '../reducers/auth'
import Songs from './Songs.jsx'

class SingleUser extends Component {

componentDidMount() {

  this.props.loadUserSongs()

}

  render() {
    const user = this.props.auth
    console.log(this.props.auth.songs)
    return (
      <div>
        <h1>User:</h1>
        <div>
          <h3>Name:</h3>
          <p>{user.name}</p>
        </div>
        <div>
          <h3>Email:</h3>
          <p>{user.email}</p>
        </div>
          <h3>WhoAmI(User Id):</h3>
          <p>{user.id} </p>
          <h3>List of Songs</h3>
          <Songs songs={this.props.auth.songs} nested={true} />
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    auth: state.auth
  }
}

const mapStateToDispatch = function(dispatch) {
  return {
    loadUserSongs: () => {
      dispatch(fetchUserSongs())
    }
  }
}

const userContainer = connect(mapStateToProps, mapStateToDispatch)(SingleUser)

export default userContainer

