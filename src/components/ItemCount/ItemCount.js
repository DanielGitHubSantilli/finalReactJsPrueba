import React, { useState } from 'react'; 
import { Button } from 'react-bootstrap';

const ItemCount = ({stock, onAdd, initial})=>{
  const [count,setCount] = useState(initial)

  const increment = () => {
    if (count < stock) {
      setCount(count + 1)
    } 
  }
  const decrement = () =>{
    if (count > 0) {
      setCount(count - 1)
    } 
  }
  return (
    <div className= 'd-flex flex-column align-items-center justify-content-between'>
      <div>
        <Button className="btn" variant = 'dark' onClick={decrement}>-</Button>
        <span className='btn'>{count}</span>
        <Button className="btn" variant = 'dark' onClick={increment}>+</Button>
      </div>
      <div>
          <Button className='mt-2' variant = 'dark' onClick={()=>onAdd(count)} disabled={!stock}>
            Agregar al carrito
          </Button>
      </div>
    </div>
  )
}

export default ItemCount;
