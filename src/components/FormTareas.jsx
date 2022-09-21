import React from "react";
import { Form, Button } from "react-bootstrap";

const FormTareas = () => {
  return (
    <>
      <Form className="my-3">
        <Form.Group className="d-flex" controlId="formBasicText">
          <Form.Control type="text" placeholder="Agregue una tarea" />
        <Button variant="primary" type="submit">
          Agregar
        </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default FormTareas;
