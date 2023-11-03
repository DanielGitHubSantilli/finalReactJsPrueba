import React, { useState, useEffect } from 'react'; 
//import { getItem } from '../../mock/asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {getProductById} from '../../mock/asyncMock'

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
  const [product,setProduct] = useState({})
  const [loader,setLoader] = useState(false)
  const { Id } = useParams()
  
  useEffect(() => {
    setLoader(true)
    getProductById(Id)

    const docRef = doc(db,'products', Id)

    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const ProductAdapted ={id: response.id, ...data}
        setProduct(ProductAdapted)
        })
        .cath(error=>{
          console.log(error)
        })
        .finally(()=>{
          setLoader(false)
        })
    },[Id])
    return(
      <div>
        {loader ? <p>cargando...</p>: <ItemDetail product={product}/>}
      </div>
    )    
    }
    
export default ItemDetailContainer;

