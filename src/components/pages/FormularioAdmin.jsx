import React from 'react';
import { Form } from 'react-bootstrap';

const FormularioAdmin = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Canción</Form.Label>
                <Form.Control
                type='text'
                placeholder='Sweet Child O mine'
                required
                >
                    
                </Form.Control>
            </Form.Group>
        </Form>
    );
};

export default FormularioAdmin;