import { Form, Button } from 'react-bootstrap';
import '../styles/login.css'; 
import InputWithIcon from '../../components/InputWithIcon';
const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-logo-container">
        <img src="/logo.png" alt="AlgoRitmo Pulse Logo" className="login-pulse-logo" />
      </div>

      <div className="login-card">
        <h2 className="login-title">Inicia Sesión</h2>
        <Form>
           <InputWithIcon
            label="Correo electrónico"
            icon="bi-envelope-fill"
            type="email"
            placeholder="Correo electronico..."
            id="formBasicEmail"
          />
          <InputWithIcon
            label="Contraseña"
            icon="bi-lock-fill"
            type="password"
            placeholder="Contraseña..."
            id="formBasicPassword"
          />

          <div className="d-flex justify-content-between align-items-center mb-4">
            <Form.Check type="checkbox" label="Guardar sesión" id="custom-checkbox" />
            <a href="/forgot-password" className="forgot-password-link">¿Olvidaste tu contraseña?</a>
          </div>

          <Button type="submit" className="login-button w-100">
            Ingresar <i className="bi bi-arrow-right"></i>
          </Button>
        </Form>
        <p className="mt-4 text-center signup-text">
          ¿Eres nuevo aquí? <a href="/register" className="signup-link">Crea una cuenta</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;