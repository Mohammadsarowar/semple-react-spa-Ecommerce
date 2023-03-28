import React from 'react';
import './Products.css'
const Products = (props) => {
    const {name,price,id,ratings,img,seller} = props.pro
    return (
        <div className='products'> 
          <img src={img}></img>
          <div className='products-info'>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} start</p>
          </div>
          <button className='btn'>Add to card</button> 
        </div>
    );
};

export default Products;