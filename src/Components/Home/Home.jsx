import { Outlet, useLocation, useNavigation } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location)
  return (
    <div>
        <Navbar></Navbar>
        <h1>This is the Home components</h1>
        {
          navigation.state === "loading" ? <h1>loading...</h1>: 
          <Outlet></Outlet>
        }
    </div>
  )
}

export default Home