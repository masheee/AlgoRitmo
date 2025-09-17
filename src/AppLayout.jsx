// src/AppLayout.jsx
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Menu from "./shared/Menu";
import Footer from "./shared/Footer";
import NotFoundPage from "./shared/NotFoundPage";

// Componentes temporales para las páginas
const HomePage = () => <p className="text-center fs-5 text-light">Bienvenido a la página de Inicio de AlgoRitmo</p>;
const NosotrosPage = () => <p className="text-center fs-5 text-light">Aquí irá la información sobre nosotros</p>;
const ListasPage = () => <p className="text-center fs-5 text-light">Próximamente: ¡Tus listas de música!</p>;


export default function AppLayout() {
  return (
    <>
      <Menu />
      <main style={{ padding: "2rem 0", flex: "1" }}>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/catalogo" element={<ListasPage />} />
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}