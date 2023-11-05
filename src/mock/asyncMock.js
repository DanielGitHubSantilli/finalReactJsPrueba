//simula la promesa
export const products =[
  {
    id:'1',
    name:'Detergente',
    price: "900",
    category: 'limpiadores_liquidos',
    stock:300,
    description: 'Detergente 1000 cm3',
    img:"/assets/cif.svg"
  },
  {
    id:'2',
    name:'Lavandina',
    price: "700",
    category: 'limpiadores_cremosos',
    stock:300,
    description: 'Lavandina 1000 cm3',
    img:"https://i.postimg.cc/bwbgY3rd/133791-OSAS83-455.jpg"
  }
]

export const getProductById = () =>{
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
      resolve(products.find(prod => prod.Item === getItem))
    }, 500)
  })
};
 

// export const getProductsByCategory =(productsByCategory)=>{
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve(products.find(prod => prod.category === productsByCategory))
//     }, 500)
//   })
// };
 