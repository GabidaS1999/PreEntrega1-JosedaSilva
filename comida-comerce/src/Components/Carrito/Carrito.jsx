import React, { useContext } from 'react'
import CartContext from '../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import { Link } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';



const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const handleVaciar = () => {
    vaciarCarrito()
  }

  const mostrarAlertaError = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El carrito esta vacio",
      footer: '<a href="/">Ir a comprar</a>',
      showConfirmButton: false,
      allowOutsideClick: false,
    });
  }

  const order = {
    items: carrito.map((p) => ({
      id: p.id,
      title: p.title,
      cantidad: p.cantidad,
    })),

    total: precioTotal(),
  };

  const handleClick = () => {
  const db = getFirestore();
  const orderCollection = collection(db, "orders")
  addDoc(orderCollection, order).then(({ id }) => console.log(id))
}
  


  if (carrito.length === 0) {
    return (
     mostrarAlertaError()
    )
  }

  return (
    <>
      {carrito.map((product) => (
        <ItemCart className='item-cart' key={product.id} product={product} />
      ))}
      <p className='p-precio-total'>Precio total: ${precioTotal()}</p>
      <div className='botones-totales'>
      
      <button className='vaciar-carrito' onClick={handleVaciar}>Vaciar</button>

      <Link to="/checkout">
        {''}
        <button onClick={handleClick} className='btn-total'>Finalizar Compra</button>
      </Link>
      </div>
    </>
  )
}

export default Carrito;
