
import React, { useContext } from 'react'
import { MdShoppingCart } from 'react-icons/md';
import CartContext from '../context/CartContext';

const CarWidget = () =>{
    const {cantidadCarrito} = useContext(CartContext);
    return (
        <button className='Cart'> <MdShoppingCart/> <span className='numerito'> {cantidadCarrito()}</span> </button>
    );
};
export default CarWidget;
