import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCounter/ItemCount';
import CartContext from '../context/CartContext';

const ItemDetail = ({ item }) => {
    const {agregarAlCarrito} = useContext (CartContext);
    const [cantidad, setCantidad] = useState(1);

    const Restar = () =>{
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const Sumar = ()=>{
        cantidad < item.stock && setCantidad(cantidad + 1)
    } 


    
    return (
        <div className='row card card-detalle' >
            <div className='cold-md-4 iifset-img-4'>
                <img src={item.img} className='detalle-img img-fluid card-img-top' alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <p>Stock: {item.stock}</p>
                <ItemCount cantidad={cantidad} Sumar={Sumar} Restar={Restar} agregarAlCarrito={()=>{agregarAlCarrito(item, cantidad)}} />
            </div>
             
        </div >
    )
}
export default ItemDetail;