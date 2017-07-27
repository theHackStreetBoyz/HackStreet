import axios from 'axios'

// OB/TZL: watch out for code styling / consistency

//reducer
const reducer = (state=null, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
  case GET_SONGS:
    newState.songs = action.songs
  }
  return state
}


//action type
const GET_SONGS = 'GET_SONGS'


//action creator
export const getSongs = songs => ({
  type: GET_SONGS, songs
})



//thunks
export const fetchSongs = () =>
  dispatch =>
    axios.get('/api/songs')
      .then((songs) => dispatch(getSongs(songs)))

export default reducer
