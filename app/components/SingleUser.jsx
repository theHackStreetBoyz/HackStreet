import React, { Component } from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { fetchUserSongs, fetchPurchases } from '../reducers/auth'
import Songs from './Songs.jsx'

class SingleUser extends Component {

componentDidMount() {
  this.props.loadUserSongs()
  this.props.fetchPurchases()
}


  render() {
    const user = this.props.auth
    // // .loadUserInfo()
    console.log('USERRRR....', user)
    //const user = state.auth
    // console.log('this.props.auth.songs', this.props.auth.songs)

    // console.log("userId", this.props.userId)

    return (
      <div>
        <h1>User:</h1>
        <div>
          <h3>Name:</h3>
           {/*<p>{ user.name }</p>*/}
        </div>
        <div>
          <h3>Email:</h3>
           {/*<p>{ user.email }</p>*/}
        </div>
          <h3>WhoAmI(User Id):</h3>
          {/*<p>{ user.id } </p>*/}
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
                    (user.songs && user.songs.map((song) => (
                      <tr key={song.id}>
                        <td>{song.name}</td>
                        <td>{song.artist}</td>
                        <td>{song.price}</td>
                      </tr>
                    )
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
    },
    fetchPurchases: () => {
      dispatch(fetchPurchases())
    }
  }
}

const userContainer = connect(mapStateToProps, mapStateToDispatch)(SingleUser)

export default userContainer
