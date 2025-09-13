import React from 'react';
import { Button, Table } from "react-bootstrap";

const Administrador = () => {
    return (
        <section className='container'>
            <div className='d-flex justify-content-between mt-4'>
                <h1>Administración</h1>
                <Button variant='success' className='py-0'>Agregar Canción</Button>
            </div>

            <Table responsive striped bordered hover variant="dark" className='mt-4'>
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
                            <Button variant='success' className='me-2'>
                                <i className="bi bi-pencil-square"></i>
                            </Button>
                            <Button variant="danger">
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
                            <Button variant='success' className='me-2'>
                                <i className="bi bi-pencil-square"></i>
                            </Button>
                            <Button variant="danger">
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
                            <Button variant='success' className='me-2'>
                                <i className="bi bi-pencil-square"></i>
                            </Button>
                            <Button variant="danger">
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
