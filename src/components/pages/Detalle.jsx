import { Card, Row, Col } from "react-bootstrap";
import "../../styles/detalle.css";

const Detalle = () => {
  return (
    <>
      <Card className="my-3 p-3 shadow-sm fondo-detalle">
        <Row>
          {/* Imagen de la canción */}
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <Card.Img
              src="https://cdn-images.dzcdn.net/images/cover/7b7321890dcb7f7f7298ae48d67f2d50/1900x1900-000000-80-0-0.jpg"
              alt="Imagen de la canción"
              className="img-fluid rounded"
            />
          </Col>

          {/* Información de la canción */}
          <Col md={8}>
            <Card.Body>
              <Card.Title className="fs-4 mb-4 texto-detalle">Microdancing</Card.Title>
              <Card.Subtitle className="mb-4 text-muted texto">Mucho</Card.Subtitle>
              <Card.Subtitle className="mb-4 text-muted texto">
                Babasonicos
              </Card.Subtitle>

              <hr />

              <p>
                <strong>Duración:</strong> 4:22
              </p>
              <p>
                <strong>Género:</strong> Rock
              </p>
              <p>
                <strong>Año:</strong> 2014
              </p>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <button className="btn boton-detalle"><i className="bi bi-arrow-bar-left"> Volver al inicio </i></button>
    </>
  );
};

export default Detalle;
