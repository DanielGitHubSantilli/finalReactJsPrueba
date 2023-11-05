import { addDoc, collection,serverTimestamp } from 'firebase/firestore';
import React, { useState,useContext } from 'react';
import { db } from '../../services/firebase/firebaseConfig';
import { CartContext } from '../../context/cartContext';

const Checkout = () => {
  const[user, setUser]=useState({})
  const[validateEmail, setValidateEmail]= useState('')
  const[orderId,setOrderId]= useState('')
  const {cart,total,clear}=useContext(CartContext)
  const datosComprador = (e) =>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  const finalizarComopra = (e) => {
      e.preventDefault()
      if(!user.name && !user.phone){
        alert("Los datos deben estar compoletos")
      }else{
        let order = {
          user,
          item: cart,
          total: total(),
          date: serverTimestamp()
        };
        const ventas = collection(db,"orders")
        addDoc(ventas,order)
        .then((res)=>{
          setOrderId(res.id)
          clear()
        })
          .catch((error)=>console.log(error))
      }
    }
  return(
  <div>
    {orderId !==''
    ?<div>
      <h2>Felicitaciones! Tu orden fue generada con éxito!</h2>
      <h5>Su ID de registro es: {orderId}</h5>
    </div>
    :<div>
    <h2>Terminar compra</h2>
    <h5>Por favor llenar con sus datos</h5>
    <form onSubmit={finalizarComopra}>
      <div className='mb-3'>
        <label cLassName='form-label'> Nombre Completo</label>
        <input cLassName='form-control' onChange={datosComprador} type='text' placeholder= 'Nombre y Apellido' name= 'name' required/>
      </div>
      <div className='mb-3'>
        <label cLassName='form-label'> Número de telefono</label>
        <input cLassName='form-control'onChange={datosComprador} type='number' placeholder='+549234232364' name='phone'/>
      </div>
      <div className='mb-3'>
        <label cLassName='form-label'> E-mail</label>
        <input className='form-control'onChange={datosComprador} type= 'email' placeholder='e-mail@email.com' name= 'mail' required/>
      </div>
      <div className='mb-3'>
        <label cLassName='form-label'> Repita email por favor</label>
        <input className='form-control'type= 'email' placeholder='e-mail@email.com' name= 'mail' onChange={((e)=>setValidateEmail(e.target.value))} required/>
      </div>
      <button className='btn btn-dark' type='submit' disabled={validateEmail !== user.mail }>Generar Orden</button>
    </form>
    </div>
}
</div>
)
}
export default Checkout;