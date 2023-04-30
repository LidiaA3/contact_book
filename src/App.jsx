import { Link, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import User from "./views/User"
import { useEffect, useState } from "react"


function App() {

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?nat=es&results=60')
      .then(res => res.json())
      .then(data => setList(data.results))
  },[])

  return (
    <>
      <h1>This is my contact book</h1>
      <Routes>
        <Route path='/' element={ <Home elements={list} /> } />
        <Route path='/user/:userId' element={ <User elements={list} /> } />
      </Routes>
    </>
  )
}

export default App
