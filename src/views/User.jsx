import { Link, useParams } from "react-router-dom"
import arrow_back from "/arrow_back.svg"
import './User.scss'

function User(props) {

    const { userId } = useParams();

    const user =  props.elements.find(item => item.login.salt === userId);

    if (user === undefined) {
        return (
            <>
                <h1>Something went wrong</h1>
                <Link className="btn" to='/'><img src={arrow_back} alt="Go back icon" /> Go back</Link>
            </>
        );
    }


    return (
      <>
      <Link className="btn btn__back" to='/'><img src={arrow_back} alt="Go back icon" /> Go back</Link>
      <div className="usercard">
        <div className="usercard__section usercard__sectionimg">
          <img className="usercard__img" src={user.picture.large} alt={user.name.first + ' imagen'} />
          <h3 className="usercard__dni">{user.id.value}</h3>
        </div>
        <div className="usercard__section">
          <div className="usercard__header">
            <h2 className="usercard__name">{user.name.first} <span>{user.name.last}</span></h2>
            <small className="usercard__small">{user.location.state}</small>
          </div>
          <div className="usercard__subsection">
            <small className="usercard__small">Email:</small>
            <p className="usercard__text">{user.email}</p>
            <small className="usercard__small">Teléfono:</small>
            <p className="usercard__text">{user.cell}</p>
          </div>
          <small className="usercard__bd usercard__small">{user.dob.date.slice(8,10)}/{user.dob.date.slice(5,7)}</small>
        </div>
      </div>
      </>
    )
  }
  
  export default User