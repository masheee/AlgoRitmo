import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/admin.css";

const FormularioAdmin = () => {
  const [titulo, setTitulo] = useState("");
  const [artista, setArtista] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");
  const [duracion, setDuracion] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Ver si venimos en modo edición
  const editar = location.state?.cancion !== undefined;
  const editarIndex = location.state?.index;

  useEffect(() => {
    if (editar) {
      const { cancion } = location.state;
      setTitulo(cancion.titulo);
      setArtista(cancion.artista);
      setCategoria(cancion.categoria);
      setImagen(cancion.imagen);
      setDuracion(cancion.duracion);
    }
  }, [editar, location.state]);

  const handleSubmit = (e) => {
    console.log("¡El formulario fue enviado!");
    e.preventDefault();

    const nuevaCancion = { titulo, artista, categoria, imagen, duracion };
    console.log("Datos a guardar:", nuevaCancion);
    // ✅ Leer canciones de localStorage
    const data = localStorage.getItem("canciones");
    const canciones = data ? JSON.parse(data) : [];

    if (editar) {
      // ✅ Editar canción existente
      canciones[editarIndex] = nuevaCancion;
    } else {
      // ✅ Crear nueva canción
      canciones.push(nuevaCancion);
    }

    // ✅ Guardar actualizado
    localStorage.setItem("canciones", JSON.stringify(canciones));
    console.log("Datos guardados en localStorage.");
    // ✅ Volver a administrador
    navigate("/admin");
  };

  return (
    <Form className="my-4 container form-container" onSubmit={handleSubmit}>
      <h2>{editar ? "Editar Canción" : "Crear Canción"}</h2>
      <Form.Group className="mb-3 ps-5">
        <Form.Label>Título</Form.Label>
        <Form.Control
          type="text"
          placeholder="Sweet Child O mine"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 ps-5">
        
        <Form.Label>Artista o Grupo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Guns n roses"
          value={artista}
          onChange={(e) => setArtista(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 ps-5">
        <Form.Label>Categoría</Form.Label>
        <Form.Control
          type="text"
          placeholder="Rock"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 ps-5" controlId="formImagen">
        <Form.Label>Imagen URL*</Form.Label>
        <Form.Control
          type="text"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          placeholder="Ej: https://images.pexels.com/photos/33928028/pexels-photo.jpeg"
        />
      </Form.Group>
      <Form.Group className="mb-3 ps-5">
        <Form.Label>Duración</Form.Label>
        <Form.Control
          type="text"
          placeholder="02:22"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          required
        />
      </Form.Group>
      <Button type="submit" /* variant="success" */ className="ms-5 btn-gradient">
         {editar ? "Guardar Cambios" : "Crear Canción"}
      </Button>
    </Form>
  );
};

export default FormularioAdmin;
