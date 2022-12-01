import React from "react";
import Form from "react-bootstrap/Form";
const Select = ({ name, value, opt1, opt2, onChange, label }) => {
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Select value={value} onChange={onChange} name={name}>
        <option>{opt1}</option>
        <option>{opt2}</option>
      </Form.Select>
    </>
  );
};

export default Select;
