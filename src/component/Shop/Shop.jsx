import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import SaveCard from '../saveCard/Savecard';
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
        <SaveCard card={save}></SaveCard>
    </div>
    );
};

export default Shop;