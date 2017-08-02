import axios from 'axios'

// action type
const GET_USER_CART = 'GET_USER_CART'
const ADDING_TO_CART = 'ADDING_TO_CART'
const DELETE_FROM_CART = "DELETE_FROM_CART"
const DELETE_CART = "DELETE_CART"

// action creators
export const addingToCart = song => ({
  type: ADDING_TO_CART, song
})

export const getUserCart = cart => ({
  type: GET_USER_CART, cart
})

export const deleteFromCart = song_id => ({
  type: DELETE_FROM_CART, song_id
})

export const deleteCart = () => ({
  type: DELETE_FROM_CART
})
// initialState

const initialState= {
  cart: []
}

// reducers
const reducer = (state=initialState, action) => {
  switch (action.type) {
  case ADDING_TO_CART:
    state = [...state, action.song]
    break
  case GET_USER_CART:
    state = action.cart
    break
  case DELETE_FROM_CART:
    state = state.filter(song => song.id !== action.song_id)
    break
  case DELETE_CART:
    state.cart = []
    break
  default:
    return state
  }
  return state
}

export const fetchCart = (id) =>
  dispatch =>
    axios.get(`/api/users/${id}/cart`)
        .then(res => res.data)
        .then((cart) => {
          dispatch(getUserCart(cart))
        })
      .catch((error) => console.log(error))

export const updatingCart = (id, song_id) =>
  dispatch =>
    axios.post(`/api/users/${id}/cart/newSong`, ({song_id}))
      .then(res => res.data)
      .then(newSong => {
        dispatch(addingToCart(newSong[0][0]))
      })
      .catch((error) => console.log(error))

export const deleteASong = (id, song_id) =>
  dispatch =>
      
    axios.delete(`/api/users/${id}/cart`, {data: {song_id: song_id}})
      .then(() => dispatch(deleteFromCart(song_id)))
      .catch(err => console.error(`Removing song: ${song_id} unsuccesful`, err))

export const deleteCartSongs = () =>
  dispatch =>
    axios.delete('/api/users/cart')
      .then(() => dispatch(deleteCart()))

export default reducer
