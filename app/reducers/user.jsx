import axios from 'axios'


//reducer
const reducer = (state=null, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
  case GET_USER:
    newState.user = action.user
    break
  case GET_USER_SONGS:
    newState.user.songs = action.songs
    break
  case GET_USER_CART:
    newState.user.cart = action.cart
    break
  case ADDING_PURCHASE:
    newState.user.purchase = [...newState.purchase, action.purchase]
    break
  // case GET_USER_PURCHASES:
  //   newState.user.purchases = action.purchases
  //   break
  default:
    return state
  }
  return newState
}


//action type
const GET_USER = 'GET_USER'
const GET_USER_SONGS = 'GET_USER_SONGS'
const GET_USER_CART = 'GET_USER_CART'
const GET_USER_PURCHASES = 'GET_USER_PURCHASES'
const ADDING_PURCHASE = 'ADDING_PURCHASE'
// const UPDATE_USER = 'UPDATE_USER' can we just use get user?


//action creator
export const getUser = user => ({
  type: GET_USER, user
})

export const getUserSongs = songs => ({
  type: GET_USER_SONGS, songs
})

export const getUserCart = cart => ({
  type: GET_USER_CART, cart
})

export const getUserPurchases = purchases => ({
  type: GET_USER_PURCHASES, purchases
})

export const addingPurchase = purchase => ({
  type: ADDING_PURCHASE, purchase
})

// export const updateUser = user => ({
//   type: GET_USER, user
// })

//thunks
export const fetchUser = (id) =>
  dispatch =>
    axios.get(`/api/users/${id}`)
      .then((user) => dispatch(getUser(user.data)))

export const fetchUserSongs = (id) =>
  dispatch =>
    axios.get(`/api/users/${id}/songs`)
      .then((songs) => dispatch(getUserSongs(songs.data)))

export const fetchCart = (id) =>
  dispatch =>
    axios.get(`/api/${id}/carts`)
      .then((cart) => dispatch(getUserCart(cart.data)))

export const fetchPurchases = (id) =>
  dispatch =>
    axios.get(`/api/${id}/purchases`)
      .then((purchases) => dispatch(getUserPurchases(purchases.data)))


//use this when cart is purchased, be careful of the 3 params passed in
//we don't have a single purchase page
export const creatingPurchase = (id, purchase, history) =>
  dispatch =>
    axios.post(`/api/${id}/purchase`, purchase)
      .then(purchased => {
        dispatch(addingPurchase(purchased.data))
        history.push('/')
        // history.push(`/purchase/${purchased.data.id}`)
      })

export const updatingUser = (id, content) =>
  dispatch =>
    axios.put(`/api/user/${id}`, content)
      .then(modifiedUser => dispatch(getUser(modifiedUser)))


export default reducer
