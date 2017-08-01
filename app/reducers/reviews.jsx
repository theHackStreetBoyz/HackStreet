import axios from 'axios'

// action type
const GET_REVIEWS = 'GET_REVIEWS'
const GET_SONG_REVIEWS = 'GET_SONG_REVIEWS'

// action creators
export const getReviews = reviews => ({
  type: GET_REVIEWS, reviews
})

export const getSongReviews = reviews => ({
  type: GET_SONG_REVIEWS, reviews
})

//initialState
const initialState = {
  reviews: []
}

// reducers
const reducer = (state=initialState, action) => {
  switch (action.type) {
  case GET_REVIEWS:
    console.log(action, state)
    state = action.reviews
    break
  case GET_SONG_REVIEWS:
    state = action.reviews
    break
  default:
    return state
  }
  return state
}

export const fetchReviews = () => 
  dispatch =>
    axios.get('/reviews')
    .then(res => res.data)
    .then(reviews => {
      dispatch(getReviews(reviews))
    })


export const fetchReviewsForSong = (songId) =>
  dispatch => 
    axios.get(`/api/songs/${songId}/reviews`)
    .then(res => res.data)
    .then(reviews => {
      dispatch(getSongReviews(reviews))
    })

export default reducer
