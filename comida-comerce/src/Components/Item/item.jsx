import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <Link to={'/item/'+ item.id}>
            
            <div className='container'>
                <div className='card border carta'>
                    <img src={item.img} className='card-img-top' alt={item.title} />
                    <div className='card-body text-center'>
                        <p children='card-text'>{item.title}</p>
                        <p className='card-text'>${item.price}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default Item;