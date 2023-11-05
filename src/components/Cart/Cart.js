// import './Cart.css'
import React,{ useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';


const Cart = () => {
const {cart, clear, total} = useContext(CartContext)//Cart Estaba en minúscula pero no me salía la propiedad Lenght
   return(
     <div> 
       {cart.lenght  
       //para recorrer y borrar el carrito y que muestre el total - No me sale la piedad Lenght... Si pongo Cart sí...
         ? <div>
          {cart.map ((item)=><CartItem key={item.id} item={item}/>)} 
          {/* No me sale la piedad map de ninguna manera*/}
            <p>Total a pagar: ${total()}</p>
            <div>
              <button className='btn btn-danger' onClick={clear}>Variar Carrito</button>
              <Link className='btn btn-dark' to='/checkOut'>Terminar Compra</Link>
            </div>
         </div>
         : <div> 
            <h3>Tu carrito está vacío</h3>
            <Link to ='/' className='btn btn-dark'>Ir a comprar</Link>
          </div>}
    </div>
    )
  }
export default Cart;