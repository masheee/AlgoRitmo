import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import canciones from "../../Data/CancionesInicio.js";
import { Link } from "react-router-dom";
import { useState } from "react";

const CardCanciones = () => {
  /* estado para buscar el input */
  const [busqueda, setBusqueda] = useState("");

  /* busca canciones con el mismo titulo */
  const cancionesFiltradas = canciones.filter((cancion) =>
    cancion.nombreCancion.toLowerCase().startsWith(busqueda.toLowerCase())
  );

  /* muestra solo las canciones filtradas, osea si encontro alguna coincidencia */
  const soloSeleccionada =
    busqueda.trim() !== "" && cancionesFiltradas.length > 0;

  /* se deja solo las canciones que coinciden con la búsqueda, sino hay coincidencias se muestran todas */

  return (
    <div className="container">
      <div className=" d-flex justify-content-center align-items-center mt-4  ">
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/1047443/pexels-photo-1047443.jpeg"
        />
      </div>
      <div className="text-center my-5">
        <h2>BUSCA TU TEMA FAVORITO!!!</h2>
      </div>

      {/* buscador */}
      <div className="mb-5 ">
        <Form className="d-flex justify-content-end " role="search">
          <Form.Control
            type="search"
            placeholder="Elegí una canción"
            className="me-2 w-50 "
            aria-label="Search"
            value={busqueda}
            /* cada vez que escribo en el input, se actualiza el estado, cada cambio actualiza cancionesSeleccionada */
            onChange={(e) => setBusqueda(e.target.value)}
          />
          {/* <Button
            variant="outline-primary btn-login"
            onClick={(e) => e.preventDefault()}
          >
            Buscá
          </Button> */}
        </Form>
      </div>
      {/* grilla */}
      {soloSeleccionada ? (
        <Row className="mt-4 justify-content-center">
          {cancionesFiltradas.map((cancion) => (
            <Col key={cancion.id} xs={12} md={4} lg={3} className="mb-3 ">
              <Card className="h-100  rounded-4 overflow-hidden cardHover">
                <Card.Img
                  variant="top"
                  src={cancion.imagen}
                  className="img-fluid "
                />
                <Card.Body className="d-flex flex-column align-items-center text-center">
                  <Card.Title>{cancionesFiltradas[0].artista}</Card.Title>
                  <Card.Text>{cancionesFiltradas[0].nombreCancion}</Card.Text>
                  <Button
                    as={Link}
                    to="/detalles/"
                    className="btn-login w-100"
                  >
                    <a href="./Detalle">
                    Conocer más
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Row className="mt-4 justify-content-center">
          {canciones.map((cancion) => (
            <Col key={cancion.id} xs={12} md={4} lg={3} className="mb-3 ">
              <Card className="h-100  rounded-4 overflow-hidden cardHover">
                <Card.Img
                  variant="top"
                  src={cancion.imagen}
                  className="img-fluid "
                />
                <Card.Body className="d-flex flex-column align-items-center text-center">
                  <Card.Title>{cancion.artista}</Card.Title>
                  <Card.Text>{cancion.nombreCancion}</Card.Text>
                  <Button variant="primary" className="btn-login">
                    Conocé más
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default CardCanciones;
