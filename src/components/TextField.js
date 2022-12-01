import React from "react";

// boostrap core
import { Form } from "react-bootstrap";

const TextField = ({ className, ...props }) => {
  return (
    <div className={className}>
      <Form.Control
        {...props}
      />
    </div>
  
  );
};

export default TextField;
