import axios from 'axios'

// action type
const GET_REVIEWS = 'GET_REVIEWS'

// action creators
export const getReviews = reviews => ({
  type: GET_REVIEWS, reviews
})

// reducers
const reducer = (state=[], action) => {
  const newState = []
  switch (action.type) {
  case GET_REVIEWS:
    state = action.reviews
    break
  default:
    return state
  }
  return newState
}

export const fetchReviews = () => {
  dispatch => {
    console.log('HIYA')
    axios.get('/reviews')
    .then(res => res.data)
    .then(reviews => {
      dispatch(getReviews(reviews))
    })
  }
}

export default reducer
