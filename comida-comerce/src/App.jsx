import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './Components/Error';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Carrito from './Components/Carrito/Carrito';
import CheckOut from './Components/CheckOut/CheckOut';
import { CartProvider } from './Components/context/CartContext';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>

          <NavBar  />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='*' element={<Error />} />
          </Routes>
          
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
