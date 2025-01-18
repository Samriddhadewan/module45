
const User = ({user}) => {

    const {name, phone, email} = user;
    const userStyle = {
        border : "1px solid red",
        width: '60%',
        marginTop: '12px'

    }
  return (
    <div style={userStyle}>
        <h3>user name: {name}</h3>
        <h3>user mail: {email}</h3>
        <h3>user mail: {phone}</h3>
    </div>
  )
}

export default User