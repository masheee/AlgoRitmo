import { Container } from "react-bootstrap";
import Menu from "./shared/Menu";
import Footer from "./shared/Footer";

export default function AppLayout() {
  return (
    <>
      <Menu />
      <main style={{ padding: "2rem 0", flex: "1" }}>
        <Container>
          <p className="text-center fs-5">Hola Aqui va el MAIN</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
