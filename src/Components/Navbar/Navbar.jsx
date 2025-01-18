import { Link } from "react-router-dom"

const Navbar = () => {


  const linkStyles = {
    marginRight : '12px'
  }
  return (
    <nav>

        <h1>NavBar</h1>
        <ul>
          <Link style={linkStyles} to='/'>home</Link>
          <Link style={linkStyles} to='/contact'>Contact</Link>
          <Link style={linkStyles} to='/about'>About</Link>
          <Link style={linkStyles} to='/posts'>Posts</Link>
          <Link style={linkStyles} to='/users'>Users</Link>
        </ul>


    </nav>
  )
}

export default Navbar