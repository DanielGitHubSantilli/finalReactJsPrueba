import { useState, useEffect } from "react";
//import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
//import products from '../../mock/asyncMock';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams(); 

useEffect(()=>{
  setLoading(true)
  const collectionProducts = categoryId ? query(collection(db,"products"),where("categoryId","==",categoryId)):collection(db,"products")
  getDocs(collectionProducts)
  .then((res)=> {
    const list = res.docs.map((products)=>{
      return{
        id:products.id,
        ...products.data()
      }
    })
    setProducts(list)
  })
  .catch((error)=> console.log(error))
  .finally(()=>setLoading(false))
},[categoryId])

return (
    <div>
      { 
      loading ? <p>Cargando...</p>
      : <div>
          <h1>{greeting}<span>{categoryId && categoryId}</span></h1>
          <ItemList products={products}/>
        </div>
      }     
    </div>
  )
}

 export default ItemListContainer;
