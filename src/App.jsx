import { Card, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Detalle from "./components/pages/Detalle";
import CardCanciones from "./components/pages/CardCanciones";
import Administrador from "./components/pages/Administrador";
import Nosotros from "./components/pages/Nosotros";
import Login from "./components/pages/Login";
import NotFoundPage from "./components/shared/NotFoundPage";
import FormularioAdmin from "./components/pages/FormularioAdmin";
import { useEffect, useState } from "react";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";

export default function AppLayout() {
  const sesionUsuario =
    JSON.parse(sessionStorage.getItem("usuarioKey")) || false;
  const [usuarioLogueado, setUsuarioLogueado] = useState(sesionUsuario);

  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);

  return (
    <>
      <BrowserRouter>
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        />
      <main>
        <Routes>
          <Route path="/" element={<CardCanciones />} />
          <Route path="/detalles" element={<Detalle />} />
          <Route
            path="/login"
            element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
          />
          <Route ute
            path="/admin"
            element={
              <ProtectorAdmin
                usuarioLogueado={usuarioLogueado}
              ></ProtectorAdmin>
            }
          >
            <Route 
            index 
            element={<Administrador />}
            />
            <Route 
              path="formulario" 
              element={<FormularioAdmin />} />
          </Route>

          <Route path="/about" element={<Nosotros />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>        
        <Footer />
      </BrowserRouter>


        {/*  */}<Container></Container>

    </>
  );
}


//      <main style={{ padding: "2rem 0", flex: "1" }}>