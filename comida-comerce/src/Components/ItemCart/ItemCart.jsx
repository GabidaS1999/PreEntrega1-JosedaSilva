import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const ItemCart = ({ product }) => {
    const {sacarProduct} = useContext(CartContext);
    return (
      <div className="itemCarrito container">
        
        <img src={product.img} alt={product.title} />
        <div>
          <p>{product.title}</p>
          <p>Cantidad: {product.cantidad}</p>
          <p>Precio: ${product.price}</p>
          <p>Subtotal: ${product.cantidad * product.price}</p>
          <button onClick={()=>sacarProduct(product.id)}><i class="bi bi-x-circle-fill">X</i></button>
        </div>
      </div>
    );
};

export default ItemCart;
