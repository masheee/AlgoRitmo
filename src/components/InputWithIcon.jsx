import React from 'react';
import { Form } from 'react-bootstrap';
import '../styles/InputWithIcon.css'; 

const InputWithIcon = React.forwardRef(({ icon, label, ...props }, ref) => {
  return (
    <Form.Group className="mb-4" controlId={props.id || props.name}>
      {label && <Form.Label>{label}</Form.Label>}
      <div className="input-wrapper">
        <i className={`bi ${icon} input-icon`} aria-hidden="true"></i>
        <Form.Control {...props} ref={ref} className="login-input" />
      </div>
    </Form.Group>
  );
});

export default InputWithIcon;