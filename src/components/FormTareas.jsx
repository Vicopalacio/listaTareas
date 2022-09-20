import React from "react";
import { Form, Button } from "react-bootstrap";

const FormTareas = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Nueva Tarea</Form.Label>
          <Form.Control type="text" placeholder="Agregue una tarea" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar
        </Button>
      </Form>
    </>
  );
};

export default FormTareas;
