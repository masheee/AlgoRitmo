import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/menu.css";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
const navegacion = useNavigate()

const logout = () => {
  setUsuarioLogueado(false);
  navegacion("/login")
}

  return (
    <Navbar expand="lg" className="navbar-custom" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand-custom fuenteLogo">
          <img src="/logo.png" alt="AlgoRitmo Icon" className="navbar-logo" />
          AlgoRitmo
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <NavLink to="/" className="nav-link-custom nav-link">
              Inicio
            </NavLink>
            <NavLink to="/about" className="nav-link-custom nav-link">
              Nosotros
            </NavLink>            
            {usuarioLogueado ? (
              <>
                <NavLink to="/admin" className="nav-link-custom nav-link">
                  Administrador
                </NavLink>
                <Button className="navbar-custom border-0 btn-cerrarSesion" onClick={logout}>Cerrar Sesión</Button>
              </>
            ) : (
              <Button href="/login" className="btn-login ms-lg-3 mt-3 mt-lg-0">
                Ingresar
              </Button>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
