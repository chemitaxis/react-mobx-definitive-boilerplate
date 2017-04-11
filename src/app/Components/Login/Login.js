import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import './login.scss'

import { checkEmail, checkRequired } from '../../Utils/Validators'
import { login } from '../../Auth'

@inject('store')
@observer
class Login extends Component {
  constructor (props) {
    super(props)
    this.store = this.props.store
    this._login = this._login.bind(this)
    this.state =
    {
      isValid: false,
      processed: false
    }
  }
  async _login () {
    // Validate fields
    if (!checkEmail(this.emailInput.value) || !checkRequired(this.passwordInput.value)) {
      this.setState({
        isValid: false,
        processed: true
      })
      return
    }

    this.setState({
      isValid: true,
      processed: true
    })

    // Simulate API call
    this.store.showLoader()
    let result = await login(this.emailInput.value, this.passwordInput.value)
    this.store.hideLoader()
    if (result.error) {
      this.setState({
        isValid: false,
        processed: true
      })
      return
    }

    const authUser =
      {
        token: result.token,
        email: result.email

      }

    this.store.setUser(authUser)
    this.props.history.push('/about')
  }

  render () {
    return (
      <div className='wrapper'>
        <div className='form-signin'>
          <h2 className='form-signin-heading'>Admin Login</h2>
          <input type='text' ref={(input) => { this.emailInput = input }} className='form-control' name='email' placeholder='Email Address' />
          <input type='password' ref={(input) => { this.passwordInput = input }} className='form-control' name='password' placeholder='Password' />
          <button onClick={this._login} className='btn btn-lg btn-primary btn-block m-b-10' type='submit' >Login </button>
          {!this.state.isValid && this.state.processed ? <span className='label label-danger'>Please check the form</span> : null}
        </div>
      </div>
    )
  }
}

export default Login
