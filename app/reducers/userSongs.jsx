import axios from 'axios'

// action type
const GET_USER_SONGS = 'GET_USER_SONGS'

// action creator
export const getUserSongs = songs => ({
  type: GET_USER_SONGS, songs
})

// thunks
export const fetchUserSongs = (id) => {
  return dispatch =>
    axios.get(`/api/users/${id}/songs`)
      .then((songs) => dispatch(getUserSongs(songs.data)))
      .catch(() => console.log('error'))
}

// export const fetchUserSongs = (id) =>
//   dispatch =>
//     axios.get(`/api/users/${id}/songs`)
//       .then((songs) => dispatch(getUserSongs(songs.data)))
//       .catch(() => console.error('error'))

// reducer
const reducer = (state = {}, action) => {
  const newState = {}
  switch (action.type) {
  case GET_USER_SONGS:
    newState.songs = action.songs
    break
  default:
    return state
  }
  return newState
}

export default reducer
