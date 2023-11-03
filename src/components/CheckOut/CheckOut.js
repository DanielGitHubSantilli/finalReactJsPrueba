import React from "react";
import { Timestamp } from "firebase/firestore"
import { writeBatch } from "firebase/firestore"
import { collection } from "firebase/firestore"
import { getDocs } from "firebase/firestore"
import { query } from "firebase/firestore"
import { where } from "firebase/firestore"
import { documentId } from "firebase/firestore"
import { addDoc } from "firebase/firestore"

import { useContext, useState } from "react"
import {db} from "../../services/firebase/firebaseConfig"

import CartContext from "../../context/cartContext"

import CheckOutForm from '../CheckOutForm/CheckOutForm'

const CheckOut =()=> {
  const [ loading, setLoading ]=useState(false);
  const [ orderId, setOrderId ]=useState('');
  
  const { cart ,total, clearCart } = useContext(CartContext);
  
  const createOrder = async ({name,telefono,email}) =>{
    setLoading(true)

    try{
          const objOrder = {
            Comprador:{
              name,telefono,email
            },
            items:cart,
            total:total,
            date: Timestamp.formDate(new Date())
          }

        const batch = writeBatch(db)

        const outOfStock = []

       // const ids = cart.map(prod => prod.id)

        const productsRef = collection(db, 'products')

        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(),'in',)))//en el video sigue esta línea de código..

        const { docs } = productsAddedFromFirestore
        
        docs.forEach(doc=> { //no sale foreach en docs lo tengo que poner a mano.
          const dataDoc = doc.data()//no sale data en doc lo tengo que poner a mano.
          const stockDb = dataDoc.stock//no sale stock en dataDoc lo tengo que poner a mano.

          const productsAddedToCart = cart.find(prod => prod.id === doc.id) //no sale find en cart lo tengo que poner a mano.
          const prodQuantity = productsAddedToCart?.quantity //no sale quantity en productsAddedToCart lo tengo que poner a mano.

          if (stockDb >= prodQuantity){ //no sale update en batch, lo tengo que poner a mano.
              batch.update(doc.ref, {stock: stockDb - prodQuantity})//no sale ref en doc, lo tengo que poner a mano.
          }else{
            outOfStock.push({id: doc.id,...dataDoc})
          } 
        })
      
      if(outOfStock.length === 0) {
          await batch.commit//no sale commit en batch, lo tengo que poner a mano.

          const orderRef = collection(db, 'orders')

          const orderAdded = await addDoc(orderRef,objOrder)

          setOrderId(orderAdded.id)
          clearCart() 
      } else {
        console.error('Hay productos que están fuera de stock')
      }

    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }

  }
   
  if (loading){
    return <h1>Se está generando su orden...</h1>
  }

  if (orderId){
    return <h1>El ID de su orden es: {orderId}</h1>
  }

  return(
    <div>
      <h1>CheckOut</h1>
      <CheckOutForm onConfirm={createOrder}/>
    </div>
  )
}

export default CheckOut;