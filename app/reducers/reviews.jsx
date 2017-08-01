import axios from 'axios'

// action type
const GET_REVIEWS = 'GET_REVIEWS'

// action creators
export const getReviews = reviews => ({
  type: GET_REVIEWS, reviews
})

// initialState
const initialState = {
  reviews: []
}

// reducers
const reducer = (state=initialState, action) => {
  // let newState = []
  switch (action.type) {
  case GET_REVIEWS:
    state = action.reviews
    break
  default:
    return state
  }
  return state
}

export const fetchReviews = () =>
  dispatch =>
    axios.get('/api/songs/reviews')
    .then(res => res.data)
    .then(reviews => dispatch(getReviews(reviews)))

export default reducer
