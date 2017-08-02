import React, { Component } from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
// import { fetchPurchases } from '../reducers/auth'
import { fetchUserSongs } from '../reducers/userSongs'

import Songs from './Songs.jsx'

class SingleUser extends Component {

  componentWillMount() {
    // console.log('COMPONENT DID MOUNT')
    this.props.intializeData()
  }

  render() {

    // console.log('this.props.auth.user', this.props.auth.user)

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
        {/*
           <p>{user.id} </p>
          <h3>List of Songs:</h3>
           <div className='row'>
            <div className='col-md-12'>
              <table className="table table-responsive table-striped table-hover table-sm">
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>ARTIST</th>
                    <th>PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    (Array.isArray(user.songs) && user.songs.map((song) => {
                      return (
                        <tr key={song.id}>
                          <td>{song.name}</td>
                          <td>{song.artist}</td>
                          <td>{song.price}</td>
                        </tr>
                      )
                    }
                  ))}
                </tbody>
                <tbody>
                  {
                    (user.purchases && user.purchases.map((purchase) => (
                      <tr key={purchase.id}>
                        <td>{purchase.created_at}</td>
                      </tr>
                    )
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p>{user.id} </p>
          */}
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
