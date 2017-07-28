import React, { Component } from 'react'

export default class SingleUser extends Component {
  render() {
    return (
      <div>
        <h1>User:</h1>
        <div>
          <h3>Name:</h3>
          <p>{this.store.currentUser.name}</p>
        </div>
        <div>
          <h3>Email:</h3>
          <p>{this.store.currentUser.email}</p>
        </div>
      </div>
    )
  }
}
