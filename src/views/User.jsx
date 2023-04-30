import { Link, useParams } from "react-router-dom";

function User(props) {

    const { userId } = useParams();

    const user =  props.elements.find(item => item.login.salt === userId);

    if (user === undefined) {
        return (
            <>
                <h1>Something went wrong</h1>
                <Link className="btn" to='/'>Go back</Link>
            </>
        );
    }


    return (
      <>
        <Link to='/'>Back</Link>
        <h2>{user.name.first} <span>{user.name.last}</span></h2>
        <img src={user.picture.large} alt="" />
        <p>Email: {user.email}</p>
        <p>Telf. {user.cell}</p>
        <p>City: {user.location.state}</p>
        <p>Birthday: {user.dob.date.slice(8,10) + '/' + user.dob.date.slice(5,7)}</p>
        <small>DNI: {user.id.value}</small>
      </>
    )
  }
  
  export default User