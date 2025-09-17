import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Google, Facebook } from "react-bootstrap-icons"; 
import "../../styles/Login.css";

const LoginPage = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} centered className="login-modal">
      <Modal.Header closeButton className="login-header">
        <Modal.Title>Iniciar Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body className="login-body">
        <Form>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="ejemplo@email.com"
              className="login-input"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              className="login-input"
            />
          </Form.Group>

          <Button type="submit" className="btn-login w-100">
            Ingresar
          </Button>
        </Form>

        <div className="login-divider">o ingresa con</div>

        <div className="login-social">
          <Button className="btn-google">
            <Google className="me-2" /> Google
          </Button>
          <Button className="btn-facebook">
            <Facebook className="me-2" /> Facebook
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginPage;
