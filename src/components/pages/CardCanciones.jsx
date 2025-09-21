import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import canciones from "../../Data/CancionesInicio.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/CardCanciones.css";

const CardCanciones = () => {
  const [busqueda, setBusqueda] = useState("");

  const [todasLasCanciones, setTodasLasCanciones] = useState([]);

  useEffect(() => {
    const cancionesGuardadas =
      JSON.parse(localStorage.getItem("canciones")) || [];
    setTodasLasCanciones([...canciones, ...cancionesGuardadas]);
  }, []);

  const cancionesFiltradas = todasLasCanciones.filter((cancion) =>
    (cancion.nombreCancion || cancion.titulo)
      .toLowerCase()
      .startsWith(busqueda.toLowerCase())
  );

  const soloSeleccionada =
    busqueda.trim() !== "" && cancionesFiltradas.length > 0;

  return (
    <div className="container">
      <div className=" d-flex justify-content-center align-items-center mt-1  ">
        <Card.Img
          variant="top"
          className="imagenPpal"
          src="https://images.pexels.com/photos/2747450/pexels-photo-2747450.jpeg"
          alt="Imagen recital"
        />
      </div>
      <div className="text-center my-5">
        <h2>¡BUSCA TU TEMA FAVORITO!</h2>
      </div>

      {/* buscador */}

      <div className="mb-5 d-flex justify-content-center">
        <Form className="d-flex justify-content-center w-50 " role="search">
          <Form.Control
            type="search"
            placeholder="Elegí una canción"
            className="me-2 w-50 buscarPpal"
            aria-label="Search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <Button
            className="btn-gradient"
            onClick={() => setBusqueda("")}
          >
            Buscá otra
          </Button>
        </Form>
      </div>
      {/* grilla */}
      {busqueda.trim() !== "" && cancionesFiltradas.length === 0 ? (
        <div className="text-center my-5">
          <h4>
            <i className="bi bi-emoji-frown fs-1 text-danger"></i> No se
            encontró ninguna canción con ese nombre
          </h4>
        </div>
      ) : (
        <Row className="mt-4 justify-content-center">
          {(soloSeleccionada ? cancionesFiltradas : todasLasCanciones).map(
            (cancion, index) => (
              <Col key={index} xs={12} md={4} lg={3} className="mb-3 ">
                <Card className="h-100  rounded-4 overflow-hidden cardHover ">
                  <div className="botonPlay">
                    <Card.Img
                      variant="top"
                      src={cancion.imagen}
                      className="img-fluid "
                    />
                    <Link to="/NotFoundPage" className="icon-overlay-link">
                      <i className="bi bi-play-circle  text-gray icon-overlay "></i>
                    </Link>
                  </div>
                  <Card.Body className="d-flex flex-column align-items-center text-center">
                    <Card.Title>{cancion.artista}</Card.Title>
                    <Card.Text>
                      {cancion.nombreCancion || cancion.titulo}
                    </Card.Text>
                    <Button as={Link} to="/detalles" className="btn-gradient w-50">
                      Conocé más
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          )}
        </Row>
      )}
    </div>
  );
};

export default CardCanciones;
