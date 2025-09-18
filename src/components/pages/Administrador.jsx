import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/admin.css";

const Administrador = () => {
  const navigate = useNavigate();
  const [canciones, setCanciones] = useState([]);

  // ✅ Cargar canciones desde localStorage al iniciar
  useEffect(() => {
    const data = localStorage.getItem("canciones");
    if (data) {
      setCanciones(JSON.parse(data));
    }
  }, []);

  // ✅ Borrar canción
  const handleDelete = (index) => {
    const cancionActual = [...canciones];
    cancionActual.splice(index, 1);
    localStorage.setItem("canciones", JSON.stringify(cancionActual));
    setCanciones(cancionActual);
  };

  // ✅ Editar canción → manda datos al formulario
  const handleEdit = (cancion, index) => {
    navigate("/admin/formulario", { state: { cancion, index } });
  };

  return (
    <section className="container">
      <div className="d-flex justify-content-around mt-4">
        <h1>Administración de Canciones</h1>
        <Button
          className="py-0 admin-button"
          onClick={() => navigate("/admin/formulario")}
        >
          Agregar Canción
        </Button>
      </div>

      <div className="mt-4">
        <Form className="row g-2">
          <div className="col-12 col-lg-6 col-md-8  d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar canción..."
              className="me-2 admin-control-buscar"
              aria-label="Buscar"
            />
            <Button className="admin-button">Buscar</Button>
          </div>
        </Form>
      </div>

      <Table
        responsive
        bordered
        hover
        variant="dark"
        className="mt-4 admin-table"
      >
        <thead>
          <tr className="text-center">
            <th>Código</th>
            <th>Título</th>
            <th>Artista/Grupo</th>
            <th>Categoría</th>
            <th>Duración</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {canciones.length > 0 ? (
            canciones.map((cancion, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{cancion.titulo}</td>
                <td>{cancion.artista}</td>
                <td>{cancion.categoria}</td>
                <td>{cancion.duracion}</td>
                <td className="text-center">
                  <Button className="me-2 admin-button-edit" onClick={() => handleEdit(cancion, i)}>
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                  <Button className="admin-button-trash" onClick={() => handleDelete(i)}>
                    <i className="bi bi-trash"></i>
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No hay canciones cargadas</td>
            </tr>
          )}
          {/* <tr>
                        <td>001</td>
                        <td>Bohemian Rhapsody</td>
                        <td>Queen</td>
                        <td>Rock</td>
                        <td>5:55</td>
                        <td className="text-center">
                            <Button  className='me-2 admin-button-edit'>
                                <i className="bi bi-pencil-square"></i>
                            </Button>
                            <Button className='admin-button-trash'>
                            <i className="bi bi-trash"></i>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>Shape of You</td>
                        <td>Ed Sheeran</td>
                        <td>Pop</td>
                        <td>4:23</td>
                        <td className="text-center">
                            <Button variant='success' className='me-2 admin-button-edit'>
                                <i className="bi bi-pencil-square "></i>
                            </Button>
                            <Button className='admin-button-trash'>
                            <i className="bi bi-trash"></i>
                            </Button>
                        </td>
                        
                    </tr>
                    <tr>
                        <td>003</td>
                        <td>Blinding Lights</td>
                        <td>The Weeknd</td>
                        <td>Synth-pop</td>
                        <td>3:20</td>
                        <td className="text-center">
                            <Button variant='success' className='me-2 admin-button-edit'>
                                <i className="bi bi-pencil-square"></i>
                            </Button>
                            <Button className='admin-button-trash'>
                            <i className="bi bi-trash"></i>
                            </Button>
                        </td>
                    </tr> */}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
