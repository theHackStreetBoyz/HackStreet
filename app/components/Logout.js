import React from 'react'

export const Logout = ({ logout }) => (
  <form onSubmit={evt => {
    evt.preventDefault()
    logout()
  } }>
    <input type="submit" value="Logout" />
  </form>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  state => ({}),
  {logout},
)(Logout)
