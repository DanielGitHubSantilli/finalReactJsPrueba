import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState('');
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} de productos`);
    setQuantityAdded(cantidad);
    addItem(product,cantidad)
  };
  console.log(quantityAdded);
  const { addItem } = useContext(CartContext);
  console.log(addItem);

  return (
    <div className='d-flex flex-column align-items-center'>
      <h3>Detalle de: {product.name}</h3>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      {quantityAdded === '' ? (
        <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
      ) : (
        <Link to='/cart' className='btn btn-dark'>
          Ir al carrito
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;





// import React, {useState,useContext} from 'react'
// import  ItemCount from '../ItemCount/ItemCount'
// import {Link} from 'react-router-dom'
// import { CartContext } from '../../context/cartContext'

// const ItemDetail = ({product}) => { 
//   const [quantityAdded, setQuantityAdded]= useState('')
//   const onAdd = (cantidad)=> { 
//     console.log(`Compraste ${cantidad} de productos`)
//     setQuantityAdded(cantidad)
//     //addItem(product,cantidad)
//   }
  
//  console.log(quantityAdded)
//   const {Cart} = useContext(CartContext)
//   const {addItem} = useContext(CartContext)
//   console.log(addItem)
//   console.log(Cart)
  
  

//   return (
//     <div className='d-flex flex-column align-items-center'>
//       <h3>Detalle de: {product.name}</h3>
//       <img src={product.img} alt={product.name}/>
//       <p>{product.description}</p>
//       <p>${product.price}</p>
//       {quantityAdded==='' ? <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/> 
//       : <Link to='/cart' className='btn btn-dark' >Ir al carrito</Link>}
//     </div>
//   )
// } 

// export default ItemDetail;
