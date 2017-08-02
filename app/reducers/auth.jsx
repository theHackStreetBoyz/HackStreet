import axios from 'axios'

// action type
const AUTHENTICATED = 'AUTHENTICATED'
const GET_USER = 'GET_USER'
const GET_USER_SONGS = 'GET_USER_SONGS'
const GET_USER_PURCHASES = 'GET_USER_PURCHASES'
const ADDING_PURCHASE = 'ADDING_PURCHASE'
const CREATE_USER = 'CREATE USER'

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

export const createUser = user => ({
  type: CREATE_USER, user
})

// reducers
const reducer = (state={}, action) => {
  let newState = {}
  switch (action.type) {
  case AUTHENTICATED:
    newState.user = action.user
    break
  case GET_USER:
    newState = action.user
    break
  case GET_USER_SONGS:
    newState.songs = action.songs
    break
  case ADDING_PURCHASE:
    newState.purchase = [...newState.purchase, action.purchase]
    break
  case CREATE_USER:
    newState = action.user
    break
  case GET_USER_PURCHASES:
    newState.purchases = action.purchases
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

export const signup = (credentials) =>
 dispatch =>
  axios.post('/api/users', credentials)
  .then(res => res.data)
  .then(user => {
    dispatch(createUser(user))
    dispatch(login(credentials.email, credentials.password))
  })
  .catch(error => console.error(error))

export const fetchUser = (id) =>
  dispatch =>
    axios.get(`/api/users/${id}`)
      .then((user) => dispatch(getUser(user.data)))
      .catch(() => console.error('error'))

export const fetchUserSongs = (id) =>
  dispatch =>
    axios.get(`/api/users/${id}/songs`)
      .then((songs) => dispatch(getUserSongs(songs.data)))
      .catch(() => console.error('error'))

export const fetchPurchases = () => {
  console.log('HELLO IS IT ME YOU ARE LOOKING FOR')
  return dispatch =>
  axios.get(`/api/users/purchases`)
  .then(res => res.data)
  .then((purchases) => {
    // console.log('hello')
    dispatch(getUserPurchases(purchases))
  })
  .catch(() => console.error('error'))
}

// use this when cart is purchased, be careful of the 3 params passed in
// we don't have a single purchase page
export const creatingPurchase = (cart) =>
  dispatch =>
    axios.post(`/api/users/purchase`, ({cart}))
      .then(purchased => {
        // console.log(purchased)
        purchased.data
      })
      .then((purchase) => {
        // console.log(purchase)
        dispatch(addingPurchase(purchase))
      })
      .catch(() => console.log('error'))

export const updatingUser = (id, content) =>
  dispatch =>
    axios.put(`/api/users/${id}`, content)
      .then(modifiedUser => dispatch(getUser(modifiedUser)))
      .catch(() => console.log('error'))

export default reducer
