import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../reducers/auth'

/* -----------------    COMPONENT     ------------------ */

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.onSignupSubmit = this.onSignupSubmit.bind(this)
  }

  render() {
    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={this.onSignupSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                name="email"
                type="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Name:</label>
              <input
                name="name"
                type="name"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                name="password"
                type="password"
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-block btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
    )
  }

  onSignupSubmit(event) {
    event.preventDefault()
    const credentials = {
      email: event.target.email.value,
      name: event.target.name.value,
      password: event.target.password.value
    }
    this.props.signup(credentials)
    this.props.history.push('/')
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (dispatch) => ({})

const mapDispatch = (dispatch) => ({
  signup: (credentials) => {
    dispatch(signup(credentials))
  }
})

export default connect(mapState, mapDispatch)(SignUp)
