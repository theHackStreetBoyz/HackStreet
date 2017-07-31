import React, { Component } from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

class SingleUser extends Component {
  render() {
    const user = this.props.auth
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
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    auth: state.auth
  }
}

const userContainer = connect(mapStateToProps, null)(SingleUser)

export default userContainer
