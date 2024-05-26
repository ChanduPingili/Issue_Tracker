import {Link} from 'react-router-dom';
import './navBar.style.css'
export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">OrgRegister</Link>
      <Link to="/developerlog">DevRegister</Link>
      <Link to="/Userlog">UserRegister</Link>
      <Link to="/login">OrgLogin</Link>
      <Link to="/developerlogin">DevLogin</Link>
      <Link to="/Userlogin">UserLogin</Link>
    </nav>
  )
}
