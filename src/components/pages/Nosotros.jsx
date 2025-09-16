import { Card, Row } from "react-bootstrap";
import PaulaCabana from "../../img/PaulaCabana.jpg";
import Image from "react-bootstrap/Image";

const Nosotros = () => {
  return (
    <section className="container">
      <h2 className="text-center">¿Quiénes somos?</h2>
      <p>
        En{" "}
        <a href="/" className="AlgoRitmo text-decoration-none fw-bold">
          AlgoRitmo
        </a>{" "}
        creemos que la música es más que un sonido: es una experiencia que
        conecta personas, emociones y momentos. Nuestra plataforma de streaming
        fue creada para que disfrutes de tus canciones favoritas, descubras
        nuevos artistas y armes listas que acompañen tu día a día.
      </p>
      <br />
      <p>
        Porque con <a href="/" className="AlgoRitmo text-decoration-none fw-bold">
          AlgoRitmo
        </a> no solo escuchás música: vivís tu propio ritmo.
      </p>

      <Row sm={1} md={3} lg={6} className="g-4">
        <Card className="cardNosotros text-center">
          <Card.Img
            variant="top"
            className="imgCardNosotros mt-3"
            src={PaulaCabana}
            alt="Tali Cabana"
          />
          <Card.Body>
            <Card.Title className="text-center">Paula Cabana</Card.Title>
            <div>
              <Row sm={2} md={2} lg={2}>
                <a
                  href="https://github.com/TaliCabana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a 
                href="https://www.linkedin.com/in/paula-cabana-ingenieraindustrial/" 
                target="_blank" 
                rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
                </a>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </section>
  );
};

export default Nosotros;
