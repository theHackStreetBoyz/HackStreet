import axios from 'axios'

//action type
const GET_SONGS = 'GET_SONGS'
const GET_SONG = 'GET_SONG'
const POST_TO_CART = 'POST_TO_CART'

//reducer
const reducer = (state=[], action) => {
  //let newState = Object.assign({}, state)
  let newState = []
  switch (action.type) {
  case GET_SONGS:
    newState = action.songs
    break
  case GET_SONG:
    newState = [...newState.songs, action.song]
    break
  case POST_TO_CART:
    newState = [...newState.songs, action.song]
  default:
    return state
  }
  return newState
}

//action creator
export const getSongs = songs => ({
  type: GET_SONGS, songs
})

export const getSong = song => ({
  type: GET_SONG, song
})

export const postToCart = song => ({
  type: POST_TO_CART, song
})

//thunks
export const fetchSongs = () =>
  dispatch =>
    axios.get('/api/songs')
      .then((res) => res.data)
      .then((songs) => {
        dispatch(getSongs(songs))
      })

export const fetchSingleSong = (id) =>
    dispatch =>
      axios.get(`api/songs/${id}`)
        .then((res) => res.data)
        .then((song) => {
          dispatch(getSong(song))
        })

export const addingSongToCart = (userId, songId) =>
  dispatch =>
  axios.post(`api/users/${userId}/cart`, songId)
    .then((res) => res.data)
    .then(song => dispatch(postToCart(songId))) 

export default reducer
