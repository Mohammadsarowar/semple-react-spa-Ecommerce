import React from 'react';
import './Products.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faShoppingCart} />




const Products = (props) => {
  // const HandleAddTOCard = (product) =>{
  //   console.log(product)
  //    }
    const {name,price,id,ratings,img,seller} = props.pro
    const HandleAddTOCard = props.HandleAddTOCard
    return (
        <div className='products'> 
          <img src={img}></img>
          <div className='products-info'>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} start</p>
          </div>
          <button onClick={()=>HandleAddTOCard(props.pro)} className='btn'>Add to card {element}</button> 
        </div>
    );
};

export default Products;