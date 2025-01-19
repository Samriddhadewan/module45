import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {title, userId, id} = post;
    const postStyle = {
        border: "1px solid red",
        width: "60%",
        marginTop: "12px",
      };
  return (
    <div style={postStyle}>
        <h4>post title:{title}</h4>
        <h4>post id:{userId}</h4>
    <Link to={`/post/${id}`}>
        <button>Click here for details</button>
        </Link>
    </div>
  )
}

export default Post 