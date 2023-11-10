import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import Cart from './components/Cart/Cart';
import React from 'react';
//, {useEffect}
//import { addDoc, collection } from 'firebase/firestore';
//import { db } from './services/firebase/firebaseConfig';
//import { products } from './mock/asyncMock'
//import { getItem } from './mock/asyncMock'
//import {getProductById} from './mock/asyncMock'
//en el último video no importa checkout, react y CartProvider
import CheckOut from './components/CheckOut/CheckOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//import ItemCount from './components/ItemCount/ItemCount';
export const CartContext = React.createContext('');
console.log (CartContext)
function App() {
  // useEffect(()=>{
  //   const collectionProducts= collection(db,'product')
  //   products.map((item)=> addDoc(collectionProducts,item)) 
  // },[])
  return (
    <div className="App">
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              {/* rutas de la aplicación */}
              <Route path ='/'element={<ItemListContainer greeting='Todos nuestros productos'/>}/>
              {/* línea de arriba: ruta que muestra todos los productos */}
              <Route path ='/category/:categoryId' element={<ItemListContainer greeting='Productos por categoría: ' />} />
              {/* línea de arriba: ruta que muestra los productos por categporía*/}
              <Route path ='/item/:Id' element={<ItemDetailContainer />} />
              {/* línea de arriba: ruta que muestra todos los detalles de los productos */}
              {/* De acá para abajo no están en el video... */}
              <Route path ='/cart' element={<Cart/>} /> 
              {/* línea de arriba: ruta que muestra el componente correspondiente*/}
               <Route path ='/CheckOut' element={<CheckOut />} /> 
              {/* línea de arriba: ruta que muestra el componente correspondiente*/}
              <Route path ='*' element={<h1>404 NOT FOUND</h1>} />
              {/* línea de arriba: ruta que muestra el cartel 404 en caso de no coincidir ninguna de las rutas anteriores*/}
            </Routes>
          </BrowserRouter>
        </CartProvider>
    </div>
  )
}

export default App;
