import React from 'react';
import './Savecard.css'
const SaveCard = ({card}) => {
    let total = 0 ;
    for(const product of card){
        total = total+product.price
    }
    return (
        <div className='card-container'>
        <h3>Order Summary</h3>
        <p>Selected Items: {card.length}</p>
        <p>Total Price: ${total}</p>
        </div>
    );
};

export default SaveCard;