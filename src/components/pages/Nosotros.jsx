import { Container, Card, Row, Col, Button } from "react-bootstrap";
import PaulaCabana from "../../img/PaulaCabana.jpg";
import MarianoJuarez from "../../img/MarianoJuarez.jpg";
import MaximilianoGomezTolra from "../../img/MaximilianoGomezTolra.jpg";
import MaximilianoGuerrero from "../../img/MaximilianoGuerrero.jpg";
import SebastianFlomenbaun from "../../img/SebastianFlomenbaun.jpg";
import IgnacioLedesma from "../../img/IgnacioLedesma.jpg";
import { Link } from "react-router-dom";
import "../../styles/nosotros.css";

const Nosotros = () => {
  return (
    <section className="container">
      <h2 className="text-center">¿Quiénes somos?</h2>
      <p>
        Somos un equipo de desarrolladores apasionados por la tecnología, la creatividad y como vos, también por la música. Creemos que las melodías son un lenguaje universal capaz de unir personas y emociones, y quisimos trasladar esa idea al mundo digital.
      </p>
      <p>
        Así nació{" "}
        <Link to="/" className="AlgoRitmo fuenteLogo text-decoration-none fw-bold">
          AlgoRitmo:
        </Link>{" "}
        una plataforma de streaming pensada para que cada usuario viva la música a su manera. Desde escuchar tus canciones favoritas hasta descubrir
        nuevos artistas y armar listas que acompañen tu día, nuestro objetivo es que disfrutes de una experiencia única, sencilla y cercana.
      </p>
      <br />
      <p>
        No solo construimos una App: construimos un espacio donde la música y la tecnología se encuentran para acompañarte a vivir a tu propio ritmo.
      </p>

      <Container className="mb-5">
        <Row className="row-gap-3 justify-content-center">
          {/*Maxi Tolra*/}
          <Col xs={10} md={4} lg={2}>
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
          <Col xs={10} md={4} lg={2}>
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
          {/*Sebas*/}
          <Col xs={10} md={4} lg={2}>
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
          <Col xs={10} md={4} lg={2}>
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
          <Col xs={10} md={4} lg={2}>
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
          <Col xs={10} md={4} lg={2}>
            <Card className="cardNosotros h-100">
              <Card.Img
                variant="top"
                className="imgCardNosotros mt-3"
                src={IgnacioLedesma}
                alt="José Ingnacio Ledesma Padilla"
              />
              <Card.Body>
                <Card.Title className="fuenteCardNosotros">
                  Ingnacio Ledesma Padilla
                </Card.Title>
                <Row>
                  <Col xs={6} className="text-center">
                    <a
                      href="https://github.com/ledesmapadilla"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github iconoCard"></i>
                    </a>
                  </Col>
                  <Col xs={6} className="text-center">
                    <a
                      href="*"
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
      <div className="d-flex justify-content-center">
      <Button as={Link} to="/" className="justify-content-items-center btn-gradient my-5">
        <i className="bi bi-arrow-bar-left"> Volver al Inicio </i>
      </Button>
      </div>
    </section>
  );
};

export default Nosotros;
