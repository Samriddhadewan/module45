import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, phone, email, id } = user;
  const userStyle = {
    border: "1px solid red",
    width: "60%",
    marginTop: "12px",
  };
  return (
    <div style={userStyle}>
      <h3>user name: {name}</h3>
      <h3>user mail: {email}</h3>
      <h3>user mail: {phone}</h3>
      <Link to={`/user/${id}`}>
        <button>click me</button>
      </Link>
    </div>
  );
};

export default User;
