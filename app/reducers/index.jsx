import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  cart: require('./cart').default,
  songs: require('./songs').default,
  reviews: require('./reviews').default
})

export default rootReducer
