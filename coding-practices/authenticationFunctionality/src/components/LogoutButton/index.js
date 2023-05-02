import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

class LogoutButton extends Component {
  onLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <button type="button" onClick={this.onLogout}>
        Logout
      </button>
    )
  }
}
export default withRouter(LogoutButton)
