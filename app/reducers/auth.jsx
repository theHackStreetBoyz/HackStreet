import axios from 'axios'

// action type
const AUTHENTICATED = 'AUTHENTICATED'
const GET_USER = 'GET_USER'
const GET_USER_SONGS = 'GET_USER_SONGS'
const GET_USER_PURCHASES = 'GET_USER_PURCHASES'
const ADDING_PURCHASE = 'ADDING_PURCHASE'

// action creators
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const getUser = user => ({
  type: GET_USER, user
})

export const getUserSongs = songs => ({
  type: GET_USER_SONGS, songs
})

export const getUserPurchases = purchases => ({
  type: GET_USER_PURCHASES, purchases
})

export const addingPurchase = purchase => ({
  type: ADDING_PURCHASE, purchase
})

// reducers
const reducer = (state={}, action) => {
  let newState = {}
  switch (action.type) {
    case AUTHENTICATED:
      newState = action.user
      break
    case GET_USER:
      newState = action.user
      break
    case GET_USER_SONGS:
      newState = Object.assign({}, state, {songs: action.songs})
      break
    case ADDING_PURCHASE:
      //newState.purchase = [...newState.purchase, action.purchase]
      break
    default:
      return state
  }
  return newState
}

// thunks
export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        // dispatch(fetchUser(user.id))
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export const fetchUser = (id) =>
  dispatch =>
    axios.get(`/api/users/${id}`)
      .then((user) => dispatch(getUser(user.data)))
      .catch(() => console.log('error'))

export const fetchUserSongs = (id) =>
  dispatch =>
    axios.get(`/api/users/${id}/songs`)
      .then((songs) => dispatch(getUserSongs(songs.data)))
      .catch(() => console.log('error'))

export const fetchPurchases = (id) =>
  dispatch =>
    axios.get(`/api/${id}/purchases`)
      .then((purchases) => dispatch(getUserPurchases(purchases.data)))
      .catch(() => console.log('error'))

// use this when cart is purchased, be careful of the 3 params passed in
// we don't have a single purchase page
export const creatingPurchase = (id, purchase, history) =>
  dispatch =>
    axios.post(`/api/${id}/purchase`, purchase)
      .then(purchased => {
        dispatch(addingPurchase(purchased.data))
        history.push('/')
        // history.push(`/purchase/${purchased.data.id}`)
      })
      .catch(() => console.log('error'))

export const updatingUser = (id, content) =>
  dispatch =>
    axios.put(`/api/users/${id}`, content)
      .then(modifiedUser => dispatch(getUser(modifiedUser)))
      .catch(() => console.log('error'))

export default reducer
