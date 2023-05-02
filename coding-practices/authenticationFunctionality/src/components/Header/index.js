import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <Link to="/" className="l">
      Home
    </Link>
    <Link to="/about">About</Link>
  </>
)
export default Header
