import React from 'react';
//import './ItemList.css';
import Item from '../Item/Item';

const ItemList =({products}) =>{
  return(
    <div>
      {products.map((products)=><Item Key={products.id}{...products}/>)}
    </div>
  )
}
export default ItemList;