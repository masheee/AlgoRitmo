import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../../styles/menu.css";

const Menu = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand-custom">
          <img src="/logo.png" alt="AlgoRitmo Icon" className="navbar-logo" />
          AlgoRitmo
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">
              Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/admin" className="nav-link-custom">
              Administrador
            </Nav.Link>

            <Button href="/login" className="btn-login ms-lg-3 mt-3 mt-lg-0">
              Ingresar
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
