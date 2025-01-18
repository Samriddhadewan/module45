import { useLoaderData } from "react-router-dom"

const UserDetails = () => {
    const {name,website} = useLoaderData()
  return (
    <div>
        <h1>User Name Is {name}</h1>
        <h1>User website is {website}</h1>
    </div>
  )
}

export default UserDetails