import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import {NavLink} from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <div> <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">MyStore</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/products/list" style={({isActive})=> ({textDecoration: isActive ? "underline" : "none"})}>Products</Nav.Link>
          <Nav.Link as={NavLink} to="/products/add" style={({isActive})=> ({textDecoration: isActive ? "underline" : "none"})}>Add new product</Nav.Link>
         </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default CustomNavbar