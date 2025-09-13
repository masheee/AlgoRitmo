import { Container, Row, Col } from "react-bootstrap";
import { Github, Instagram, Linkedin } from "react-bootstrap-icons";
import "../index.css";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-surface)",
        color: "var(--color-muted)",
        padding: "2rem 0",
        marginTop: "auto",
      }}
    >
      <Container>
        <Row>
          {/* Sección 1: Marca */}
          <Col md={4}>
            <h5 style={{ color: "var(--color-primary)" }}>AlgoRitmo <img
            src="/1233.png"
            alt=" AlgoRitmo Icon"
            style={{
              width: "35px",
              height: "35px",
            }}
            className="ms-1"
          /></h5>
            <p>Tu música, en cualquier momento.</p>
          </Col>

          {/* Sección 2: Navegación */}
          <Col md={4}>
            <h6>Enlaces</h6>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Inicio</a></li>
              <li><a href="/catalogo" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Listas</a></li>
              <li><a href="/about" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Acerca de nosotros</a></li>
              <li><a href="/login" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Login</a></li>
            </ul>
          </Col>

          {/* Sección 3: Contacto + Redes */}
          <Col md={4}>
            <h6>Contacto</h6>
            <p>Email: contacto@musicapp.com</p>

            <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-muted)", fontSize: "1.5rem" }}>
                <Github />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-muted)", fontSize: "1.5rem" }}>
                <Instagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-muted)", fontSize: "1.5rem" }}>
                <Linkedin />
              </a>
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: "var(--color-muted)" }} />

        <p className="text-center" style={{ margin: 0 }}>
          © 2025 AlgoRitmoApp - Todos los derechos reservados
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
