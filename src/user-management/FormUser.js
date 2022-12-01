import React from "react";

// boostrap core
import { Button, Form, Row, Col } from "react-bootstrap";

// components
import Input from "../components/Input";
import Select from "../components/Select";
import Textarea from "../components/Textarea";
import RadioButton from "../components/RadioButton";
import Typography from '../components/Typography';
import TextField from '../components/TextField';

const FormUser = ({ formInput, handleSubmit, onChange }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <Row className="mb-3">
        <Form.Group as={Row} className="mb-3" controlId="">
          <Form.Label column sm={2}>
            <Typography label="Name:" />
          </Form.Label>
          <Col sm={10}>
            <TextField 
              type={"text"}
              placeholder={"Enter Name"}
              name={"name"}
              value={formInput.name}
              onChange={onChange}
              className="name"
            />
          </Col>
        </Form.Group>
      </Row>
    
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Status
          </Form.Label>
          <Col sm={10}>
            <RadioButton
              name={"gender"}
              value="Male"
              label="Male"
              onChange={onChange}
            />
            <RadioButton
              label="Female"
              name={"gender"}
              value="Female"
              onChange={onChange}
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Row className="mb-3">
        <Input
          type={"email"}
          placeholder={"Enter Email"}
          name={"email"}
          label={"Email: "}
          value={formInput.email}
          onChange={onChange}
        />
      </Row>

      <Textarea
        label={"Bio:"}
        rows={5}
        placeholder={"Enter Your Bio"}
        value={formInput.bio}
        name="bio"
        onChange={onChange}
      />
      <Row className="mb-9">
        <Form.Group as={Col} controlId="formGridState">
          <Select
            label={"Status:"}
            name={"status"}
            opt1={"Pending"}
            opt2={"Approved"}
            value={formInput.status}
            onChange={onChange}
          />
        </Form.Group>
      </Row>
      <div className="d-grid gap-2 mt-4 mb-4">
        <Button variant="outline-primary" size="lg" type="submit">
          Register
        </Button>
      </div>
    </Form>
  );
};

export default FormUser;
