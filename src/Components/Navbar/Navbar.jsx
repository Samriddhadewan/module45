import {  NavLink } from "react-router-dom"
import '../Navbar/navbar.css'
const Navbar = () => {


  const linkStyles = {
    marginRight : '12px'
  }
  return (
    <nav>

        <h1>NavBar</h1>
        <ul>
          <NavLink style={linkStyles} to='/'>home</NavLink>
          <NavLink style={linkStyles} to='/contact'>Contact</NavLink>
          <NavLink style={linkStyles} to='/about'>About</NavLink>
          <NavLink style={linkStyles} to='/posts'>Posts</NavLink>
          <NavLink style={linkStyles} to='/users'>Users</NavLink>
        </ul>


    </nav>
  )
}

export default Navbar