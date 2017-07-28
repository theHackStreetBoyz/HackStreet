import React, { Component } from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'



class SingleUser extends Component {

componentDidMount(){
  this.props.getUserSongs(this.props.auth.id)
  console.log('hello')
}

  render() {
      const user = this.props.auth
      console.log(this.props.auth)
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
  console.log(state)
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    getUserSongs(id) {
      dispatch(fetchUserSongs(id))
    }
  };
}; 

const userContainer = connect(mapStateToProps, mapDispatchToProps)(SingleUser);

export default userContainer;

