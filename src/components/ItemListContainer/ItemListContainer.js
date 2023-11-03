//   import React,{ useEffect, useState } from 'react';
//  import ItemCount from "../ItemCount/ItemCount";

//  import ItemList from '../ItemList/ItemList';
//  //import { getProductById } from '../../mock/asyncMock';
//  //import cif from '../../img/cif'
//  import { useParams } from 'react-router-dom';
//  import {getDocs,collection,query,where} from 'firebase/firestore'
//  import {db} from '../../services/firebase/firebaseConfig'

//  const ItemListContainer = ({ greeting }) => {

//    const [products, setProducts] = useState([]);
//    const [loading, setLoading] = useState(false);


//    const { categoryId } = useParams(); 

//    useEffect(() =>{
//      setLoading(true)
//      //getProducts()

//      const collectionRef = categoryId
//        ?query(collection(db,'products'), where ('category','==',categoryId))
//        :collection(db,'products')

//        getDocs(collectionRef)
//          .then(response =>{
//            const ProductsAdapted = response.docs.map(doc=>{
//              const data = doc.data()
//              return{id: doc.Id, ...data}
//            })
//            setProducts(ProductsAdapted)
//          })
//          .catch(error=>
//             {console.log(error)
//            })
//            .finally(()=>{
//              setLoading(false)
//            })
//    const ProductList =[
//      {
//        id:'01',
//        name: 'Kindomio',
//        stock:10,
//        price: 5000,
//        description: "juego no tan barato",
//        //img: cif,

//      }
//    ]
//    const getProducts = () =>{
//      return new Promise((resolve,reject)=>{
//        let error = false
//        setTimeout(() => {
//          if (error){
//            reject('No hay data, intente nuevamente.') 
//          }else{
//            resolve(ProductList)
//          }
//        }, 2000);
//      }) 
//    }
//    const onAdd = (quantity) => {
//      console.log (`Compraste: ${quantity} productos`)
//    }

//   return(
//    <div>
//      { 
//      loading ? <p>Cargando...</p>
//      : <div>
//          <h1>{greeting}<span>{categoryId && categoryId}</span></h1>
//          <ItemCount initial ={1} stock={10} onAdd={onAdd} />
//          <ItemList products={products}/>
//        </div>
//      } 
//    </div>
//    )
//  })
//  }
//    export default ItemListContainer;

import { useState, useEffect } from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams(); 

    useEffect(() => {
    setLoading(true)

 const collectionRef = categoryId
 ? query(collection(db, "products"), where("categoria", "==", categoryId))
 : collection(db, "productos")

 getDocs(collectionRef)
          .then(response =>{
            const ProductsAdapted = response.docs.map(doc=>{
              const data = doc.data()
              return{id: doc.Id, ...data}
            })
            setProducts(ProductsAdapted)
          })
          .catch(error=>
             {console.log(error)
            })
            .finally(()=>{
              setLoading(false)
            })}, [categoryId])



   const onAdd = (quantity) => {
      console.log (`Compraste: ${quantity} productos`)
    }
     return (
       <div>
         <div>
             { 
              loading ? <p>Cargando...</p>
              : <div>
                  <h1>{greeting}<span>{categoryId && categoryId}</span></h1>
                  <ItemCount initial ={1} stock={10} onAdd={onAdd} />
                  <ItemList products={products}/>
                </div>
              } 
            </div>
         <div className="navegacion">
             <ItemList productos= {products}/>
         </div>
       </div>
     )

 }

 export default ItemListContainer;
