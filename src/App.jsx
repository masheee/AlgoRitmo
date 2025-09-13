import { Card, Container } from "react-bootstrap";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import CardCanciones from "./components/CardCanciones";

export default function AppLayout() {
  return (
    <>
      <Menu />
      <main style={{ padding: "2rem 0", flex: "1" }}>
        <Container>
          <CardCanciones />
        </Container>
      </main>
      <Footer />
    </>
  );
}
