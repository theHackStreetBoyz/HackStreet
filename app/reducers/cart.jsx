import axios from 'axios'

// action type
const ADDING_TO_CART = 'ADDING_TO_CART'

// action creators
export const addingToCart = song => ({
  type: ADDING_TO_CART, song
})

const initialState= {
  cart: []
}

// reducers
const reducer = (state=initialState, action) => {
  switch (action.type) {
  case ADDING_TO_CART:
    state = [...state, action.song]
    break
  default:
    return state
  }
  return state
}

export const updatingCart = (id, song_id) =>
  dispatch =>
    axios.post(`/api/users/${id}/cart/newSong`, ({song_id}))
      .then(res => res.data)
      .then(newSong => {
        dispatch(addingToCart(newSong[0][0]))
      })
      .catch((error) => console.log(error))

export default reducer
