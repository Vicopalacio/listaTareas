import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  //buscar las tareas del localstorage si es que existe
  const tareaLocalStorage = JSON.parse(localStorage.getItem("listaTareas")) || [];


  const [tarea, setTarea] = useState("");
  const [arregloTareas, setArregloTareas] = useState(tareaLocalStorage);

  //ciclo de vida de un componente
  useEffect(()=>{
    // console.log("prueba del cliclo de vida")
    //guardar el arreglo de las tareas en el localstorage
    localStorage.setItem("listaTareas", JSON.stringify(arregloTareas));
  },[arregloTareas]);

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
