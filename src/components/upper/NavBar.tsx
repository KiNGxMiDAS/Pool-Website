import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/path/to/logo.png" alt="Pure Life" style={{ width: '150px' }} />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <Nav.Link as={Link} to="/philosophy">Philosophy</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
