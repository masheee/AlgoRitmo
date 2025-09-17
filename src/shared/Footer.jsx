import { Container, Row, Col } from "react-bootstrap";
import { Github, Instagram, Linkedin } from "react-bootstrap-icons";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-custom">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="footer-brand">
              AlgoRitmo
              <img src="/logo.png" alt="AlgoRitmo Icon" className="footer-logo" />
            </h5>
            <p>Tu música, en cualquier momento.</p>
          </Col>

          <Col md={4}>
            <h6>Enlaces</h6>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Inicio</a></li>
              <li><a href="/catalogo" className="footer-link">Listas</a></li>
              <li><a href="/about" className="footer-link">Acerca de nosotros</a></li>
              <li><a href="/login" className="footer-link">Login</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h6>Contacto</h6>
            <p>Email: contacto@musicapp.com</p>

            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <p className="text-center footer-copy">
          © 2025 AlgoRitmoApp - Todos los derechos reservados
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
