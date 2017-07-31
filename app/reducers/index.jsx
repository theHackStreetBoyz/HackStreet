import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  //user: require('./user').default,
  cart: require('./cart').default,
  songs: require('./songs').default,
})

export default rootReducer
