import React from 'react';

const ItemDetail = ({item}) =>{
    return (
        <div className='row card card-detalle' >
            <div className='cold-md-4 iifset-img-4'>
            <img src={item.imagen} className='detalle-img img-fluid card-img-top' alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <p>${item.precio}</p>
            </div>
          
        </div>
    )
}
export default ItemDetail;