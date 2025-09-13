import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "../index.css";

const Menu = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "var(--color-surface)" }} variant="dark">
      <Container>
        <Navbar.Brand href="/" style={{ color: "var(--color-primary)", fontWeight: "bold" }}>
          🎵 AlgoRitmo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" style={{ color: "var(--color-text)" }}>Inicio</Nav.Link>
            <Nav.Link href="/catalogo" style={{ color: "var(--color-text)" }}>Listas</Nav.Link>
            <Nav.Link href="/nosotros" style={{ color: "var(--color-text)" }}>Nosotros</Nav.Link>
            <Button 
              href="/login" 
              style={{ 
                marginLeft: "1rem",
                backgroundColor: "var(--color-primary)", 
                border: "none" 
              }}
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
