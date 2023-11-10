import React from 'react';
import {Button,Card} from 'react-bootstrap';
//import item from '../Item/Item';
import {Link} from "react-router-dom";
import {products} from '../../mock/asyncMock';

console.log(products)

const Item =({products})=>{
  return(
    <Card style={{width: '18rem'}}>
       <Card.Img variant ="top" src={products.img}/> 
      <Card.Body>
        <Card.Title>{products.name}</Card.Title>
        <Card.Text>
          {products.description}
        </Card.Text>
        <Card.Text>
          ${products.price}
        </Card.Text>
        <Button as={Link} to={`/Item/${products.id}`}variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
  )
} 

export default Item;