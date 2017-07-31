import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    let totalPrice = 0
    return (
      <div>
        <h2>Cart:</h2>
          {/*this.store.props.cart.songs.map(song => {
            totalPrice += song.price
            return (
              <div>
              <p>song.name</p>
              <p>song.artist</p>
              <p>song.album</p>
              <p>song.price</p>
              </div>
            )
          })*/}
          <p>{`Total Price: ${totalPrice}`}</p>
      </div>
    )
  }
}
