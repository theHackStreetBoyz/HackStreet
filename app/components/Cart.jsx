import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom'
import { connect } from 'react-redux'

export class Cart extends Component {
  render() {
    let totalPrice = 0
    return (
      <div>
        <h2>Cart:</h2>
        <div>
          {this.props.auth.songs.map(song => {
            totalPrice += song.price
            return (
              <div>
                <p>song.name</p>
                <p>song.artist</p>
                <p>song.album</p>
                <p>song.price</p>
              </div>
            )
          })}
          <p>{`Total Price: ${totalPrice}`}</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  console.log('STATE: ', state)
  return {
    auth: state.auth
  }
}
const mapDispatch = {}
const Container = connect(mapStateToProps, mapDispatch)(Cart)
export default Container
