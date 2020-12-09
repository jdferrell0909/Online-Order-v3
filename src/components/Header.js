import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
            <Navbar.Brand href="/">Codesmith Cafe</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/newItem">Add new Item</Nav.Link>
                <Nav.Link href="/signup">E-Club</Nav.Link>
                <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;
