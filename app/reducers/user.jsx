import axios from 'axios'


//reducer
const reducer = (state=null, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case GET_USER:
        newState.user = action.user
    case GET_USER_SONGS:
        newState.user.songs = action.songs
    case GET_USER_CART:
        newState.user.cart = action.cart
  }
  return state
}


//action type
const GET_USER = 'GET_USER'
const GET_USER_SONGS = 'GET_USER_SONGS'
const GET_USER_CART = 'GET_USER_CART'

//how do we implement user/purchase?



//action creator
export const getUser = user => ({
  type: GET_USER, user
})

export const getUserSongs = songs => ({
  type: GET_USER_SONGS, songs
})

export const getUserCart = cart => ({
  type: GET_USER_SONGS, cart
})


//thunks
// export const fetchUser = (id) =>
//   dispatch =>
//     axios.get(`/api/users/${id}`)
//       .then((user) => dispatch(getUserSongs(user.songs)))




export default reducer
