import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function NavBar() {

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand to="/products/list">MyStore</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/products/list" style={({ isActive }) => ({ textDecoration: isActive && 'underline' })}>Products</NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}
export default NavBar;