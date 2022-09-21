import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({arregloTareas, borrarTarea}) => {
  return (
    <ListGroup>
      {
        arregloTareas.map((tarea, posicion)=> <ItemTarea key={posicion} nombreTarea={tarea} borrarTarea = {borrarTarea}></ItemTarea>)
      }
    </ListGroup>
  );
};

export default ListaTareas;
