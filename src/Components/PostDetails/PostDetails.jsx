import { useLoaderData } from "react-router-dom"

const PostDetails = () => {
    const {body, id} = useLoaderData();
  return (
    <div>
        <h4>PostDetails</h4>
        <h4>Post Id : {id}</h4>
        <h5>{body}</h5>
    </div>
  )
}

export default PostDetails