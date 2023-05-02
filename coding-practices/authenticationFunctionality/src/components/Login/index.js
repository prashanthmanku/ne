import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  login = () => {
    this.settoken()
  }

  settoken = async () => {
    const url = 'https://apis.ccbp.in/login'
    const body = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      Cookies.set('jwt_token', data.jwt_token, {expires: 1})
      const {history} = this.props

      history.replace('/')
    }
  }

  render() {
    const token = Cookies.get('jwt_token_29')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <h1 className="login-heading">Please Login</h1>
        <button type="button" className="login-btn" onClick={this.login}>
          Login with Sample Creds
        </button>
      </>
    )
  }
}
export default Login
