import axios from 'axios'

import {fetchUser} from './user'

const reducer = (state={}, action) => {
  let newState = {}
  switch (action.type) {
    case AUTHENTICATED:
      newState = action.user
      break
  default:
    return state
  }
  return newState
}

const AUTHENTICATED = 'AUTHENTICATED'

export const authenticated = user => ({
  type: AUTHENTICATED, user
})

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
        dispatch(fetchUser(user.id))
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export default reducer
