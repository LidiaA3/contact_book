import { useState } from "react"
import Card from "../components/card/Card"
import Search from "../components/search/Search";

function Home(props) {
  const [inputValue, setInputValue] = useState('');
  const [listToShow, setListToShow] = useState([...props.elements]);

  function handleChange(e) {
    setInputValue(e.target.value);
    setListToShow(props.elements.filter(user => user.email.includes(inputValue)));
    console.log(listToShow);
  }

  return (
    <>
    <Search handleChange={handleChange} />
    <div className="section">
      {listToShow.map((user) => {
          return <Card key={user.login.salt} id={user.login.salt} img={user.picture.large} name={user.name.first + ' ' + user.name.last} email={user.email} />
      })}
    </div>
    </>
  )
}
  
  export default Home