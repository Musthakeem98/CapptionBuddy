import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from '../images/logo.png';
import '../styles/Header.css'

function Header() {
  return (
    <Navbar expand="lg" variant="light">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} style={{ width: '112px', height: '112px', flexShrink: 0 }} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="#" className="nav-link-hover">Use Cases</Nav.Link>
            <Nav.Link href="#" className="nav-link-hover">Chat</Nav.Link>
            <Nav.Link href="#" className="nav-link-hover">Pricing</Nav.Link>
            <Nav.Link href="#" className="nav-link-hover">Resources</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
