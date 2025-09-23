import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Google, Facebook } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import "../../styles/Login.css";
import { data, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginPage = ({ setUsuarioLogueado }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    if (
      data.email === import.meta.env.VITE_API_EMAIL &&
      data.password === import.meta.env.VITE_API_PASSWORD
    ) {
      setUsuarioLogueado(true);
      Swal.fire({
        title: "Bienvenido a la administración de AlgoRitmo",
        text: "Iniciaste sesión correctamente",
        icon: "success",
      });
      navegacion("/admin");
    } else {
      Swal.fire({
        title: "Ocurrió un error",
        text: "Credenciales incorrectas",
        icon: "error",
      });
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="login-modal">
      <Modal.Header closeButton className="login-header">
        <Modal.Title>Iniciar Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body className="login-body">
        <Form onSubmit={handleSubmit(onSubmit)} className="form-container">
          {/* Email */}
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="ejemplo@email.com"
              className="form-control login-input"
              {...register("email", {
                required: "El correo es un dato obligatorio",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message:
                    "Usted debe ingresar un correo con formato válido, ej: usuario@mail.com",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>

          {/* Contraseña */}
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              className="form-control login-input"
              {...register("password", {
                required: "La contraseña es obligatoria",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                  message:
                    "La contraseña debe tener entre 8  y 16 caracteres, al menos un dígito, al meno una minúsucla y una mayúscula y al menos un caracter especial.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.password?.message}
            </Form.Text>
          </Form.Group>

          <Button type="submit" className="btn-login w-100 btn-gradient">
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
