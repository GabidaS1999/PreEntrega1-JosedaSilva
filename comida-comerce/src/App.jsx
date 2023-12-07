import { useState } from 'react'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Hamburguesas from './Components/Hamburguesas';
import Papas from './Components/Papas';
import CarWidget from './Components/CarWidget/CarWidget';
import Error from './Components/Error';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>

    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/categoria/:id'  element={<ItemListContainer />} />
      <Route path='/item/:id'  element={<ItemDetailContainer />} />
      <Route path='*' element={<Error/>}/>

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
