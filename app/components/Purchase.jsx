import React, { Component } from 'react'

export default class SingleUser extends Component {
  render() {
    let totalPrice = 0
    return (
      <div>
        <h2>{`Purchase from: ${this.store.props.purchase.date}`}</h2>
          {this.store.props.purchase.songs.map(song => {
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
    )
  }
}
