import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../styles/notfound.css'; 

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <img src="/nofound.png" alt="Vinilo 404" className="not-found-image" />
        
        <div className="not-found-card">
          <h2>Oops, Página no encontrada</h2>
          <p>
            Parece que la página que buscas no existe o ha cambiado de lugar.
            No te preocupes, te ayudamos a volver al inicio.
          </p>
          <Button as={Link} to="/" variant="primary" className="btn-back-home">
            Volver al inicio →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;