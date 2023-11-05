import React, { useState, useEffect } from 'react'; 
import { getItem } from '../../mock/asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
//estos tres de abajo no los muestra en el video. 
import {getProductById} from '../../mock/asyncMock'

//import { getDoc, doc } from 'firebase/firestore';
//import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
  const [product,setProduct] = useState({})
  const [loader,setLoader] = useState(false)
  const { id } = useParams()
  
  useEffect(() => {
    setLoader(true)
      getItem(id)
      getProductById(id)
      .then ((res)=>setProduct(res))
      .catch((error)=> console.log(error))
      .finally(()=>setLoader(false))
  },[id])

  return(
       <div>
         {loader ? <p>cargando...</p>: <ItemDetail product={product}/>}
       </div>
  )
}
  export default ItemDetailContainer;
    // const docRef = doc(db,'products', id)

    // getDoc(docRef)
    //   .then(response => {
    //     const data = response.data()
    //     const ProductAdapted ={id: response.id, ...data}
    //     setProduct(ProductAdapted)
    //     })
    //     .cath(error=>{
    //       console.log(error)
    //     })
    //     .finally(()=>{
    //       setLoader(false)
    //     })
    // },[id])
    // return(
    //   <div>
    //     {loader ? <p>cargando...</p>: <ItemDetail product={product}/>}
    //   </div>
    // )    
    // }
    


