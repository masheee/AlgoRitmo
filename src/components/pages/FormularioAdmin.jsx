import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import "../../styles/admin.css";

const FormularioAdmin = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Ver si venimos en modo edición
  const editar = location.state?.cancion !== undefined;
  const editarIndex = location.state?.index;

  useEffect(() => {
    if (editar) {
      const { cancion } = location.state;
      // Precarga valores en modo edición
      setValue("titulo", cancion.titulo);
      setValue("artista", cancion.artista);
      setValue("categoria", cancion.categoria);
      setValue("imagen", cancion.imagen);
      setValue("duracion", cancion.duracion);
      setValue("anio", cancion.anio);
      setValue("album", cancion.album);
    } else {
      // ✅ Si no estamos editando, limpia el formulario
      reset();
    }
  }, [editar, location.state, setValue, reset]);

  const onSubmit = (data) => {
    const nuevaCancion = {
      id: editar ? location.state.cancion.id : uuidv4(),
      ...data,
    };

    const cancionesGuardadas = localStorage.getItem("canciones");
    const canciones = cancionesGuardadas ? JSON.parse(cancionesGuardadas) : [];

    if (editar) {
      canciones[editarIndex] = nuevaCancion;
    } else {
      canciones.push(nuevaCancion);
      reset(); // ✅ limpia después de crear
    }

    localStorage.setItem("canciones", JSON.stringify(canciones));

    Swal.fire({
      title: editar ? "Cambios guardados" : "Canción creada",
      text: editar
        ? "Los datos se actualizaron correctamente"
        : "Tu canción fue añadida a la lista",
      icon: "success",
      confirmButtonText: "Sí, eliminar",
    }).then(() => navigate("/admin"));
  };

  return (
    <Form
      className="my-4 container form-container position-relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Botón de cerrar */}
      <Button
        variant="outline-light"
        size="sm"
        className="position-absolute top-0 end-0 m-3 btn-gradient"
        onClick={() => navigate(-1)} // vuelve atrás
      >
        ✖
      </Button>

      <h2 className="text-center">
        {editar ? "Editar Canción" : "Crear Canción"}
      </h2>

      {/* Título */}
      <Form.Group className="mb-3 ps-5">
        <Form.Label>Título</Form.Label>
        <Form.Control
          type="text"
          placeholder="Sweet Child O' Mine"
          {...register("titulo", {
            required: "El título es obligatorio",
            minLength: {
              value: 3,
              message: "Debe tener al menos 3 caracteres",
            },
          })}
          isInvalid={!!errors.titulo}
        />
        <Form.Control.Feedback type="invalid">
          {errors.titulo?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Artista */}
      <Form.Group className="mb-3 ps-5">
        <Form.Label>Artista o Grupo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Guns N' Roses"
          {...register("artista", {
            required: "El artista es obligatorio",
            minLength: {
              value: 3,
              message: "Debe tener al menos 3 caracteres",
            },
          })}
          isInvalid={!!errors.artista}
        />
        <Form.Control.Feedback type="invalid">
          {errors.artista?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Categoría */}
      <Form.Group className="mb-3 ps-5">
        <Form.Label>Categoría</Form.Label>
        <Form.Control
          type="text"
          placeholder="Rock"
          {...register("categoria", {
            required: "La categoría es obligatoria",
          })}
          isInvalid={!!errors.categoria}
        />
        <Form.Control.Feedback type="invalid">
          {errors.categoria?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Álbum */}
      <Form.Group className="mb-3 ps-5">
        <Form.Label>Álbum</Form.Label>
        <Form.Control
          type="text"
          placeholder="Appetite for Destruction"
          {...register("album", {
            required: "El álbum es obligatorio",
            minLength: {
              value: 2,
              message: "Debe tener al menos 2 caracteres",
            },
          })}
          isInvalid={!!errors.album}
        />
        <Form.Control.Feedback type="invalid">
          {errors.album?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Año */}
      <Form.Group className="mb-3 ps-5">
        <Form.Label>Año</Form.Label>
        <Form.Control
          type="number"
          placeholder="1987"
          {...register("anio", {
            required: "El año es obligatorio",
            min: { value: 1900, message: "Debe ser mayor a 1900" },
            max: {
              value: new Date().getFullYear(),
              message: "No puede ser un año futuro",
            },
          })}
          isInvalid={!!errors.anio}
        />
        <Form.Control.Feedback type="invalid">
          {errors.anio?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Imagen */}
      <Form.Group className="mb-3 ps-5">
        <Form.Label>Imagen URL*</Form.Label>
        <Form.Control
          type="text"
          placeholder="https://ejemplo.com/imagen.jpg"
          {...register("imagen", {
            pattern: {
              value: /^https?:\/\/.*\.(jpg|jpeg|png|webp)$/i,
              message:
                "Debe ser una URL válida de imagen (jpg, jpeg, png o webp)",
            },
          })}
          isInvalid={!!errors.imagen}
        />
        <Form.Control.Feedback type="invalid">
          {errors.imagen?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Duración */}
      <Form.Group className="mb-3 ps-5">
        <Form.Label>Duración</Form.Label>
        <Form.Control
          type="text"
          placeholder="02:22"
          {...register("duracion", {
            required: "La duración es obligatoria",
            pattern: {
              value: /^\d{2}:\d{2}$/,
              message: "Formato inválido (usar mm:ss)",
            },
          })}
          isInvalid={!!errors.duracion}
        />
        <Form.Control.Feedback type="invalid">
          {errors.duracion?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" className="ms-5 btn-gradient">
        {editar ? "Guardar Cambios" : "Crear Canción"}
      </Button>
    </Form>
  );
};

export default FormularioAdmin;
