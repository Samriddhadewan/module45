import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {

  const navigate = useNavigate();
  const { name, phone, email, id } = user;
  const userStyle = {
    border: "1px solid red",
    width: "60%",
    marginTop: "12px",
  };


  const handleDetailUser = () => {
    navigate(`/user/${id}`)
  }
  return (
    <div style={userStyle}>
      <h3>user name: {name}</h3>
      <h3>user mail: {email}</h3>
      <h3>user mail: {phone}</h3>
      <Link to={`/user/${id}`}>
        <button>click me</button>
      </Link>
      <button onClick={handleDetailUser}>
        click for details
      </button>
    </div>
  );
};

export default User;
