import { Container } from "react-bootstrap";
import "../index.css";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-surface)",
        color: "var(--color-muted)",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <Container>
        <p style={{ margin: 0 }}>
          © 2025 MusicApp - Todos los derechos reservados
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
