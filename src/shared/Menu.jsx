import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../index.css";

const Menu = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Navbar.Brand href="#home" className="text-dark fw-bold ms-3" >
        <img
            src="./public/1233.png"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt="AlgoRitmo Logo"
          />
        AlgoRitmo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-3">
          <Nav.Link href="#home" className="text-dark">
            Inicio
          </Nav.Link>
          <Nav.Link href="#home" className="text-dark">
            Listas
          </Nav.Link>
          <Nav.Link href="#link" className="text-dark">
            Nosotros
          </Nav.Link>
          <Nav.Link href="#home" className="text-dark">
            Login
          </Nav.Link>
          <Nav.Link href="#home" className="text-dark">
            Administrador
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
