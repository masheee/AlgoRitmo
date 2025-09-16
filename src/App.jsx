import { Card, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Detalle from "./components/pages/Detalle";
import CardCanciones from "./components/pages/CardCanciones";
import Administrador from "./components/pages/Administrador";
import Nosotros from "./components/pages/Nosotros";
import Login from "./components/pages/Login";



export default function AppLayout() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<CardCanciones />} />
          <Route path="/admin" element={<Administrador />} />
          <Route path="/detail/:id" element={<Detalle />} />
          <Route path="/about" element={<Nosotros />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <main style={{ padding: "2rem 0", flex: "1" }}>
        <Container></Container>
      </main>
    </>
  );
}
