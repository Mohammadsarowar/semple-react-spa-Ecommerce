import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    const [save,setSave] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    const HandleAddTOCard = (product) =>{
      const newCard = [...save,product];
      setSave(newCard);
       }
    return (
    <div className='shop-container'>
        <div className='products-container'>
         {
          products.map(product=><Products
          key={product.id}
          pro={product}
          HandleAddTOCard={HandleAddTOCard}
          ></Products>)
         }
        </div>
        <div className='card-container'>
        <h3>Order Summary</h3>
        <p>Selected Items: {save.length}</p>
        </div>
    </div>
    );
};

export default Shop;