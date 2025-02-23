import { useLoaderData, useNavigate, useParams } from "react-router-dom"

const PostDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const {body, id} = useLoaderData();

    const {postId} = params;
    const handleBack = ()=> {
        navigate(-1);
    }
    console.log(postId);

  return (
    <div>
        <h4>PostDetails</h4>
        <h4>Post Id : {id}</h4>
        <h5>{body}</h5>
        <button onClick={handleBack}>back</button>
    </div>
  )
}

export default PostDetails