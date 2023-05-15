import { Link } from "react-router-dom"

import './Card.scss';

function Card(props) {

    return (
        <div className="card">
            <img src={props.img} alt="" />
            <div className="card__contents">
                <h2 className="card__tittle">{props.name}</h2>
                <p className="card__text">{props.email}</p>
                <Link className="card__link" to={'/user/' + props.id}>more info</Link>
            </div>
        </div>
    )
  }
  
  export default Card