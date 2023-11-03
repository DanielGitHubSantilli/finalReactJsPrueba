// import './Cart.css'
// import React,{ useContext } from "react";
// import { CartContext } from '../../context/cartContext';
// import { Link } from 'react-router-dom';
// import CartItem from '../CartItem/CartItem';

// const Cart = () => {
//   const {cart,clear,total} = useContext(CartContext)
//   //const {cart,total} = useContext(CartContext)
//   return(
//     <div>
//       {cart.length //para recorrer y borrar el carrito y que muestre el total
//         ?<div> 
//           {cart.map((item)=> <CartItem key={item.id} item={item}/>)}
//           <p>Total a pagar: ${total()}</p>
//           <div>
//             <button className='btn btn-danger' onClick={clear}>Vaciar Carrito</button>
//             <Link className='btn btn-dark'>Terminar compra</Link>
//           </div>
//         </div>
//         :  <div>
//            <h3>Tu carrito está vacío</h3>
//             <Link to ='/' className='btn btn-dark'>Ir a comprar</Link>
            
           
//           </div>}
//     </div>
//   ) 
// }
        
// export default Cart
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)


    if(totalQuantity() === 0) {
        return (
            <div className="cart_final">
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="btnFooter" >Inicio</Link>
            </div>
        )
    }

return (
    <div className="cart_final">

        {cart.map(item => <CartItem key={item.id} {...item}/>)}
        <h3>Total: ${total()}</h3>
        <button onClick={()=> clearCart()} className="btn_limpiar">Limpiar carrito</button>
        <Link to="/checkout" className="btn_check">Checkout</Link>
    </div>
)
}


export default Cart;