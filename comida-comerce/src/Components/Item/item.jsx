import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <Link to={'/item/'+ item.id}>
            <div className='container'>
                <div className='card border carta'>
                    <img src={item.imagen} className='card-img-top' alt={item.nombre} />
                    <div className='card-body text-center'>
                        <p children='card-text'>{item.name}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default Item;