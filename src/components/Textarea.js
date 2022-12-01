import React from "react";
import Form from "react-bootstrap/Form";
const Textarea = ({ label, rows, value, onChange, name, placeholder }) => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="textarea"
        rows={rows}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default Textarea;
