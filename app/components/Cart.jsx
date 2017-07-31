import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchCart } from '../reducers/auth'



class Cart extends Component {

  componentDidMount(){
  this.props.loadCart(this.props.auth.id)
  }
  render() {
    console.log(this.props.cart)
    let totalPrice = 0
    return (
      <div>
        <h2>Cart:</h2>
          this.props.cart.songs.map(song => {
            totalPrice += song.price
            return (
              <div>
              <p>song.name</p>
              <p>song.artist</p>
              <p>song.album</p>
              <p>song.price</p>
              </div>
            )
          })
          <p>{`Total Price: ${totalPrice}`}</p>
      </div>
    )
  }
}


const mapStateToProps = function (state) {
  console.log(state)
  return {
    auth: state.auth,
    cart: state.auth.cart
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    loadCart: (id) => {
      dispatch(fetchCart(id))
    }
  }
}

const cartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default cartContainer;


