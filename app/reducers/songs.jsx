import axios from 'axios'
//action type
const GET_SONGS = 'GET_SONGS'
const GET_SONG = 'GET_SONG'

//reducer
const reducer = (state=null, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
  case GET_SONGS:
    newState.songs = action.songs
    break
  case GET_SONG:
    newState.songs = [...newState.songs, action.song]
    break
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

//thunks
export const fetchSongs = () =>
  dispatch =>
    axios.get('/api/songs')
      .then((res) => res.data)
      .then((songs) => {
        dispatch(getSongs(songs))
      })

export default reducer
