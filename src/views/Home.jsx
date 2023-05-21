import { useEffect, useState } from "react"
import Card from "../components/card/Card"
import Search from "../components/search/Search";

function Home(props) {
  const [inputValue, setInputValue] = useState('');

  function filterList(list) {
    return list.filter(user => user.email.includes(inputValue));
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
    <Search handleChange={handleChange} />
    <div className="section">
      {filterList(props.elements).map((user) => {
          return <Card key={user.login.salt} id={user.login.salt} img={user.picture.large} name={user.name.first + ' ' + user.name.last} email={user.email} />
      })}
    </div>
    </>
  )
}
  
  export default Home