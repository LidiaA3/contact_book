import './Search.scss';

function Search (props) {
    return <div className="search">
      <input className="search__input" type="text" onChange={props.handleChange} placeholder='Search a user'/>
      {/* <button className="search__btn">Search</button> */}
    </div>
}

export default Search