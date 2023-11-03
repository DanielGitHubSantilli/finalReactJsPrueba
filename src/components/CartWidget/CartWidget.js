import React,{useContext} from 'react'
import { BsCart4 } from 'react-icons/bs'
import { Badge } from 'react-bootstrap'
import { CartContext } from '../../context/cartContext';
const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext)
  
  return (
    <div className='d-flex is-justify-content-space-around is-align-content-center'>
      <BsCart4 fontSize={'1.5rem'} color='black'/>
      {<Badge bg="danger">{ cartQuantity() }</Badge>}
      {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
    </div>
  //  <Link to = '/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}} > 
  //     <img className = 'CartImg' src={cart} alt ='Carrito-Compras'/>
  //     {totalQuantity}
  //   </Link>
  )
}
export default CartWidget;
// import { useContext } from 'react';

// import { Link } from 'react-router-dom';
