//simula la promesa
const products =[
   {
     stock:300,
     category: 'limpiadores_liquidos',
     description: 'Detergente 1000 cm3',
     img:"/assets/cif.svg",
     name:'Detergente',
     price: "900"
  },
  {
    stock:300,
    category: 'limpiadores_cremosos',
    description: 'Lavandina 1000 cm3',
    img:"https://i.postimg.cc/bwbgY3rd/133791-OSAS83-455.jpg",
    name:'Lavandina',
    price: "700"
  },
  {
    stock:200,
    category: 'limpiadores_cremosos',
    description: 'Lavandina 5000 cm3',
    img:"https://i.postimg.cc/bwbgY3rd/133791-OSAS83-455.jpg",
    name:'Lavandina 5000',
    price: "7000"
  }
]

export const getProducts = () =>{
  return new Promise((resolve, reject)=>{ 
    let error = false
    setTimeout(()=>{
      if(error){
        reject("No hay data, intente más tarde")
      }else{ 
      resolve(products)
      }
    },2000)
  })
}
export const getItem =(id)=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(products.find(item => item.id === id))
    }, 2000)
  })
};

export default products;
// export const getProductsByCategory =(productsByCategory)=>{
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve(products.find(prod => prod.category === productsByCategory))
//     }, 500)
//   })
// };
