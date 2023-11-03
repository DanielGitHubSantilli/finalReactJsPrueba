import React from 'react';
import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children})=>{
  const [cart,setCart] = useState([])
  const addItem = (item, quantity) =>{
    setCart([...cart, {...item, quantity}])
    if(isInCart(item.id)){
      setCart(cart.map((product)=>{
          if (product.id === item.id) {
            return{...product, quantity: product.quantity + quantity}
          }else{
            return product
          }
      }))
    }else{
      setCart([...cart, {...item, quantity}])
    }
  }
  
  const clear = () => {
    setCart([])
  }

const isInCart = (id) => {
  return cart.some((item)=>item.id===id)
}

const deleteItem = (id) => {
  setCart(cart.filter((item)=>item.id!==id))
}
const cartQuantity =()=>{
  return cart.reduce((acc,item)=>acc + item.quantity, 0)
}

const total=()=>{
  return cart.reduce((acc,item)=>acc + item.quantity * item.price, 0)
}
return(
  <CartContext.Provider value={{cart, addItem, clear, deleteItem, cartQuantity, total}}>
    {children}
  </CartContext.Provider>
)
}
export default CartContext;