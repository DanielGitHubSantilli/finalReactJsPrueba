import React,{useContext} from 'react';
import {CartContext} from '../../context/cartContext'

const CartItem = ({item}) => {
  const {deleteItem} = useContext(CartContext);
  return(
    <div className='d-flex justify-content-around align-items-center'>
      <img src={item.img} alt={item.name} with={'150rem'}/>
      <p>Producto: {item.name}</p>
      <p>Precio: ${item.precio}</p>
      <p>Cantidad: {item.quantity}</p>
      <p>Sub total: ${item.quantity * item.price}</p>
      <button className='btn-btn danger' onClick={()=>deleteItem(item.id)}>X</button>
    </div>
  )
}

export default CartItem;