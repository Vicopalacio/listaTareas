import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  const [tarea, setTarea] = useState("");
  const [arregloTareas, setArregloTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //no puedo usar un push en un state
    setArregloTareas([...arregloTareas, tarea]);
    //limpiar el imput
    setTarea("");
  };

  const borrarTarea = (nombre)=>{
    let arregloModificado = arregloTareas.filter((item)=> item !== nombre);
    //tenemos que actualizar el state
    setArregloTareas(arregloModificado);
  }

  return (
    <>
      <Form className="my-3" onSubmit={handleSubmit}>
        <Form.Group className="d-flex" controlId="formBasicText">
          <Form.Control
            type="text"
            placeholder="Agregue una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas arregloTareas = {arregloTareas} borrarTarea = {borrarTarea}></ListaTareas>
    </>
  );
};

export default FormTareas;
