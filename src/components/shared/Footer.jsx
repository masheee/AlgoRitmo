import { Container, Row, Col } from "react-bootstrap";
import { Github, Instagram, Linkedin } from "react-bootstrap-icons";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-custom">
      <Container>
        <Row>
          {/* Sección 1: Marca */}
          <Col md={4}>
            <h5 className="footer-brand fuenteLogo">
              AlgoRitmo
              <img
                src="/logo.png"
                alt="AlgoRitmo Icon"
                className="footer-logo"
              />
            </h5>
            <p>Tu música, en cualquier momento.</p>
          </Col>

          {/* Sección 2: Navegación */}
          <Col md={4}>
            <h6>Enlaces</h6>
            <ul className="footer-links">
              <li>
                <a href="/" className="footer-link">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/catalogo" className="footer-link">
                  Listas
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  Acerca de nosotros
                </a>
              </li>
            </ul>
          </Col>

          {/* Sección 3: Contacto + Redes */}
          <Col md={4}>
            <h6>Contacto</h6>
            <p>Email: contacto@algoritmo.com</p>

            <div className="footer-socials">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <p className="text-center footer-copy">
          &copy; 2025 <span className="fuenteLogo">AlgoRitmo</span> App - Todos
          los derechos reservados
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
