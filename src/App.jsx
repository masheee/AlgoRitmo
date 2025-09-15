import { Container } from "react-bootstrap";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Detalle from "./components/pages/Detalle";

export default function AppLayout() {
  return (
    <>
      <Menu />
      <main style={{ padding: "2rem 0", flex: "1" }}>
        <Container>
          <Detalle/>
        </Container>
      </main>
      <Footer />
    </>
  );
}
