import Card from "../components/card/Card"

function Home(props) {

    return (
      <div className="section">
        {props.elements.map((user) => {
            return <Card key={user.login.salt} id={user.login.salt} img={user.picture.large} name={user.name.first + ' ' + user.name.last} email={user.email} />
        })}
      </div>
    )
  }
  
  export default Home