import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "../styles/menu.css";

const Menu = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <img
            src="/logo.png"
            alt="AlgoRitmo Icon"
            className="navbar-logo"
          />
          AlgoRitmo
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/catalogo" className="nav-link-custom">
              Listas
            </Nav.Link>
            <Nav.Link as={Link} to="/nosotros" className="nav-link-custom">
              Nosotros
            </Nav.Link>

            <Button
              as={Link}
              to="/login"
              className="btn-login ms-lg-3 mt-3 mt-lg-0"
            >
              Ingresar
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;