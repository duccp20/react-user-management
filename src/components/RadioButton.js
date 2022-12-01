import React from "react";
import Form from "react-bootstrap/Form";

const RadioButton = ({ onChange, value, label, name, id }) => {
  return (
    <Form.Check
      type="radio"
      label={label}
      name={name}
      id={label}
      value={value}
      onChange={onChange}
    />
  );
};

export default RadioButton;
