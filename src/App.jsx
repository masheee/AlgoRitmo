import { Card, Container } from "react-bootstrap";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Detalle from "./components/pages/Detalle";
import CardCanciones from "./components/CardCanciones";
import Administrador from "./components/pages/Administrador";
import Nosotros from "./components/pages/Nosotros";

export default function AppLayout() {
  return (
    <>
      <Menu />
      <main style={{ padding: "2rem 0", flex: "1" }}>
        <Container>
        </Container>
      </main>
      <Footer />
    </>
  );
}
