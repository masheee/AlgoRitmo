import { Card, Container } from "react-bootstrap";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
<<<<<<< HEAD
import Administrador from "./components/pages/Administrador";
=======
import Detalle from "./components/pages/Detalle";
import CardCanciones from "./components/pages/CardCanciones";
import Administrador from "./components/pages/Administrador";
import Nosotros from "./components/pages/Nosotros";
>>>>>>> 2447631b3a11c2273f30b5da54b59a6a5e98ee35

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
