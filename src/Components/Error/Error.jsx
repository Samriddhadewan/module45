import { Link, useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div>
        <h1>Oops Page not found</h1>
        <p>{error.statusText || error.status}</p>

        {
            error.status === 404 && <div>
            <h1>page not found</h1>
            <p>go back to home page</p>
            <Link to={'/'}>
            <button>Home</button>
            </Link>
            </div>
        }
    </div>
  )
}

export default Error