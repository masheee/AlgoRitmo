import React from 'react';
import { Button, Form, Table } from "react-bootstrap";
import "../../styles/admin.css";
const Administrador = () => {
    return (
        <section className='container'>
            <div className='d-flex justify-content-around mt-4'>
                <h1>Administración de Canciones</h1>
                <Button variant='success' className='py-0 admin-button'>Agregar Canción</Button>
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
                        <Button className='admin-button'>Buscar</Button>
                    </div>
                    
                </Form>
            </div>


            <Table responsive bordered hover variant="dark" className='mt-4 admin-table'>
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
                    <tr>
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
                    </tr>
                </tbody>
            </Table>
        </section>
    );
};

export default Administrador;
