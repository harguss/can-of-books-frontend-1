import React from 'react';
import { Container } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      // <nav>
      //   <ul>
      //     <li>
      //       <Link to={''}>Home</Link>
      //     </li>
      //     <li>
      //       <Link to={`about`}>About</Link>
      //     </li>
      //   </ul>
      // </nav >
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    )
  }
}


export default Header;