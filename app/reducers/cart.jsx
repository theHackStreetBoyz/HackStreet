import axios from 'axios'


//action type
const GET_USER_CART = 'GET_USER_CART'
const ADDING_TO_CART = 'ADDING_TO_CART'



//action creators
export const addingToCart = song => ({
  type: ADDING_TO_CART, song
})

export const getUserCart = cart => ({
  type: GET_USER_CART, cart
})

//initialState

const initialState= {
    cart: []
}

//reducers
const reducer = (state=initialState, action) => {
  switch (action.type) {
    case ADDING_TO_CART:
      //console.log(state, action)
      state = [...state, action.song]
      //console.log("pt2", state)
      break
    case GET_USER_CART:
      state = action.cart
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
        //console.log("newSong", newSong[0][0])
        dispatch(addingToCart(newSong[0][0]))
      })
      .catch((error) => console.log(error))


export default reducer