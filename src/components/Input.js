import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const Input = ({ type, placeholder, label, value, name, onChange }) => {
  return (
    <Form.Group as={Row} className="mb-3" controlId="">
      <Form.Label column sm={2}>
        {label}
      </Form.Label>
      <Col sm={10}>
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      </Col>
    </Form.Group>
  );
};

export default Input;
