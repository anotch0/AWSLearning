import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/store">Store</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href='/thanks'>Thanks</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

/*import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/thanks">Thanks</Link>
      </ul>
    </div>
  );
};*/