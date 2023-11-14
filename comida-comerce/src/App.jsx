import { useState } from 'react'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <ItemListContainer greeting = 'Bienvenidos a Burger Vibras 🤩 ' />
    </>
  )
}

export default App
