import { useState } from "react";
import React from "react";



const ItemCount = ({cantidad, Sumar, Restar, agregarAlCarrito}) => {

    return(
        <div>
        <div className='counter-container'>
            <button onClick={Restar} className="remove-qty"> - </button>
            <p>{cantidad}</p>
            <button onClick={Sumar} className="add-qty">+</button>
        </div>
        <button className="boton-agregar" onClick={agregarAlCarrito}> Agregar al Carrito</button>
        </div>
    );
}
export default ItemCount;