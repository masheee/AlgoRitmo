import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Google, Facebook } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "../../styles/Login.css";

const LoginPage = (setUsuarioLogueado) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Si el formulario es valido
  const onSubmit = (data) => {
    if (setUsuarioLogueado) {
      setUsuarioLogueado(true); // ejemplo: marcar usuario logueado
    }
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="login-modal">
      <Modal.Header closeButton className="login-header">
        <Modal.Title>Iniciar Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body className="login-body">
        <Form>
          {/* Email */}
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="ejemplo@email.com"
              className="login-input"
              {...register("email", {
                required: "El correo es un dato obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Ustede debe ingresar un correo con formato válido",
                },
              })}
            />
            {errors?.email && (
              <Form.Text className="text-danger">
                {errors.email.message}
              </Form.Text>
            )}
          </Form.Group>
          {/* Contraseña */}
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              className="login-input"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener al menos 8 caracteres",
                },
              })}
              isInvalid={!!errors.password}
            />
            {errors.password && (
              <Form.Text className="text-danger">
                {errors.password.message}
              </Form.Text>
            )}
            {errors?.password && (
              <Form.Text className="text-danger">
                {errors.password.message}
              </Form.Text>
            )}
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
