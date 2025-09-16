import { Container, Card, Row, Col } from "react-bootstrap";
import PaulaCabana from "../../img/PaulaCabana.jpg";
import MarianoJuarez from "../../img/MarianoJuarez.jpg";
import MaximilianoGomezTolra from "../../img/MaximilianoGomezTolra.jpg";
import MaximilianoGuerrero from "../../img/MaximilianoGuerrero.jpg";
import SebastianFlomenbaun from "../../img/SebastianFlomenbaun.jpg";
import JoseLedesma from "../../img/JoseLedesma.jpg";

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
        Porque con{" "}
        <a href="/" className="AlgoRitmo text-decoration-none fw-bold">
          AlgoRitmo
        </a>{" "}
        no solo escuchás música: vivís tu propio ritmo.
      </p>

      <Container className="mb-5">
        <Row className="row-gap-3">
          {/*Maxi Tolra*/}
          <Col xs={12} md={4} lg={2}>
            <Card className="cardNosotros h-100">
              <Card.Img
                variant="top"
                className="imgCardNosotros mt-3"
                src={MaximilianoGomezTolra}
                alt="Maxi Tolra"
              />
              <Card.Body>
                <Card.Title className="fuenteCardNosotros">
                  Maximiliano Gómez Tolra
                </Card.Title>
                <Row>
                  <Col xs={6} className="text-center">
                    <a
                      href="https://github.com/masheee"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github iconoCard"></i>
                    </a>
                  </Col>
                  <Col xs={6} className="text-center">
                    <a
                      href="https://www.linkedin.com/in/maxi-gomez-256a7b37a/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-linkedin iconoCard"></i>
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {/*Tali*/}
          <Col xs={12} md={4} lg={2}>
            <Card className="cardNosotros h-100">
              <Card.Img
                variant="top"
                className="imgCardNosotros mt-3"
                src={PaulaCabana}
                alt="Tali Cabana"
              />
              <Card.Body>
                <Card.Title className="fuenteCardNosotros">
                  Paula Cabana
                </Card.Title>
                <Row>
                  <Col xs={6} className="text-center mb-3">
                    <a
                      href="https://github.com/TaliCabana"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github iconoCard"></i>
                    </a>
                  </Col>
                  <Col xs={6} className="text-center">
                    <a
                      href="https://www.linkedin.com/in/paula-cabana-ingenieraindustrial/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-linkedin iconoCard"></i>
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {/*Sebas*/}
          <Col xs={12} md={4} lg={2}>
            <Card className="cardNosotros h-100">
              <Card.Img
                variant="top"
                className="imgCardNosotros mt-3"
                src={SebastianFlomenbaun}
                alt="Sebas Flomenbaun"
              />
              <Card.Body>
                <Card.Title className="fuenteCardNosotros">
                  Sebastián Flomenbaun
                </Card.Title>
                <Row>
                  <Col xs={6} className="text-center">
                    <a
                      href="https://github.com/duncann555"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github iconoCard"></i>
                    </a>
                  </Col>
                  <Col xs={6} className="text-center">
                    <a href="*" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-linkedin iconoCard"></i>
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {/*Pollo*/}
          <Col xs={12} md={4} lg={2}>
            <Card className="cardNosotros h-100">
              <Card.Img
                variant="top"
                className="imgCardNosotros mt-3"
                src={MarianoJuarez}
                alt="Pollo Juárez"
              />
              <Card.Body>
                <Card.Title className="fuenteCardNosotros">
                  Mariano Juárez
                </Card.Title>
                <Row>
                  <Col xs={6} className="text-center">
                    <a
                      href="https://github.com/cmjuarez95"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github iconoCard"></i>
                    </a>
                  </Col>
                  <Col xs={6} className="text-center">
                    <a href="*" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-linkedin iconoCard"></i>
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {/*Maxi G*/}
          <Col xs={12} md={4} lg={2}>
            <Card className="cardNosotros h-100">
              <Card.Img
                variant="top"
                className="imgCardNosotros mt-3"
                src={MaximilianoGuerrero}
                alt="Maxi Guerrero"
              />
              <Card.Body>
                <Card.Title className="fuenteCardNosotros">
                  Maximiliano Guerrero
                </Card.Title>
                <Row>
                  <Col xs={6} className="text-center">
                    <a
                      href="https://github.com/maxiguerrero767"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github iconoCard"></i>
                    </a>
                  </Col>
                  <Col xs={6} className="text-center">
                    <a href="*" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-linkedin iconoCard"></i>
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {/*José I  Faltan imagen y links*/}
          <Col xs={12} md={4} lg={2}>
            <Card className="cardNosotros h-100">
              <Card.Img
                variant="top"
                className="imgCardNosotros mt-3"
                src={JoseLedesma}
                alt="José Ingnacio Ledesma Padilla"
              />
              <Card.Body>
                <Card.Title className="fuenteCardNosotros">
                  José Ingnacio Ledesma Padilla
                </Card.Title>
                <Row>
                  <Col xs={6} className="text-center">
                    <a
                      href="https://github.com/TaliCabana"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github iconoCard"></i>
                    </a>
                  </Col>
                  <Col xs={6} className="text-center">
                    <a
                      href="https://www.linkedin.com/in/paula-cabana-ingenieraindustrial/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-linkedin iconoCard"></i>
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Nosotros;
