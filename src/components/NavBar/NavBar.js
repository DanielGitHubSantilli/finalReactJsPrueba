import React from 'react';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(){
  return(
    <Navbar expand="lg" className ="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to ='/'>CAIDIM </Navbar.Brand> 
        <Navbar.Tagle aria-controls ="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className ="me-auto">
            <Nav.Link as={ NavLink} to ='/'>Home</Nav.Link>  
            <NavDropdown  title ="Productos" id = "basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='category/limpiadores_liquidos'>Limpiadores Líquidos</NavDropdown.Item> 
              <NavDropdown.Item as={NavLink} to='category/limpiadores_cremosos'>Limpiadores Cremosos</NavDropdown.Item> 
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/'>Todos los productos</NavDropdown.Item>
            </NavDropdown > 
          </Nav>
          <NavLink style = {{textDecoration:'none'}} to='/Cart'><CartWidget /></NavLink>
          </Navbar.Collapse>
      </Container>
      <CartWidget />
      {/* ver porque no funciona CartWidget */}
    </Navbar>
  )
}
export default Navbar;
export {NavBar};