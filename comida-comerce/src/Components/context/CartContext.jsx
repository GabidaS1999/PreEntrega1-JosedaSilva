import React, { createContext } from 'react';
import {useState } from "react";


const CartContext = createContext();
export default CartContext;

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (item, cantidad) => {
        const itemCarrito = { ...item, cantidad }
        const nuevoCarrito = [...carrito];
        const itemEnCarrito = nuevoCarrito.find((producto) => producto.id === itemCarrito.id);

        if (itemEnCarrito) {
            itemEnCarrito.cantidad = itemCarrito.cantidad + cantidad;
            setCarrito(nuevoCarrito)
        } else {
            setCarrito([...carrito, itemCarrito]);
        }
    }
    const sacarProduct = (id) =>
    setCarrito(carrito.filter((product) => product.id !== id));

    
    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
    }
    const vaciarCarrito = () => {
        setCarrito([]);
    }

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadCarrito, precioTotal, vaciarCarrito, sacarProduct }}>
            {children}
        </CartContext.Provider>
    )
}