import { Card, Row, Col } from "react-bootstrap";
import "../../styles/detalle.css";
import { useEffect, useState } from "react";
import canciones from "../../Data/CancionesInicio";
import { useParams, useNavigate } from "react-router-dom";

const Detalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cancion, setCancion] = useState(null);

  useEffect(() => {
    const cancionesGuardadas =
      JSON.parse(localStorage.getItem("canciones")) || [];
    const todas = [...canciones, ...cancionesGuardadas];

    const encontrada = todas.find((item) => String(item.id) === id);
    setCancion(encontrada);
  }, [id]);

  if (!cancion) {
    return <h2 className="text-center mt-5">Canción no encontrada</h2>;
  }

  return (
    <>
      <Card className="my-2 p-3 shadow-sm fondo-detalle">
        <Row>
          {/* Imagen de la canción */}
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <Card.Img
              src={cancion.imagen}
              alt="Portada de cancion"
              className="img-fluid rounded detalleImg"
            />
          </Col>

          {/* Información de la canción */}
          <Col md={8}>
            <Card.Body>
              <Card.Title className="fs-3 mb-4 texto-detalle ">
                {cancion.nombreCancion || cancion.titulo}
              </Card.Title>
              <Card.Subtitle className="mb-4 text-muted texto">
                {cancion.nombreCancion || cancion.titulo}
              </Card.Subtitle>
              <Card.Subtitle className="mb-4 text-muted texto">
                {cancion.artista}
              </Card.Subtitle>

              <hr />

              <p>
                <strong>Duración:</strong>{" "}
                {cancion.duracionCancion || cancion.duracion}
              </p>
              <p>
                <strong>Género:</strong> {cancion.categoria}
              </p>
              <p>
                <strong>Año:</strong> {cancion.anio}
              </p>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <div className="d-flex justify-content-center">
      <button className="justify-content-items-center btn-gradient mb-4" onClick={() => navigate("/")}>
        <i className="bi bi-arrow-bar-left"> Volver al inicio </i>
      </button>
      </div>
    </>
  );
};

export default Detalle;
