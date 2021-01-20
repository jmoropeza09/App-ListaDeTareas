import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faEdit,
  faSquare,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Tarea = ({ tarea, toggleCompletada, editarTarea, borrarTarea }) => {
  const [editandoTarea, cambiarEditandoTarea] = useState(false);
  const [nuevaTarea, cambiarNuevaTara] = useState(tarea.texto);
  const handleSubmit = (evento) => {
    evento.preventDefault();
    editarTarea(tarea.id, nuevaTarea);
    cambiarEditandoTarea(false);
  };

  return (
    <li className="lista-tareas__tarea">
      <FontAwesomeIcon
        className="lista-tareas__icono lista-tareas__icono-check"
        icon={tarea.completada ? faCheckSquare : faSquare}
        onClick={() => toggleCompletada(tarea.id)}
      />
      <div className="lista-tareas__texto">
        {editandoTarea ? (
          <form className="formulario-editar-tarea" onSubmit={handleSubmit}>
            <input
              type="text"
              className="formulario-editar-tarea__input"
              value={nuevaTarea}
              onChange={(evento) => cambiarNuevaTara(evento.target.value)}
            />
            <button type="submit" className="formulario-editar-tarea__btn">
              Actualizar
            </button>
          </form>
        ) : (
          tarea.texto
        )}
      </div>
      <div className="lista-tareas__contenedor-botones">
        <FontAwesomeIcon
          icon={faEdit}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => cambiarEditandoTarea(!editandoTarea)}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => borrarTarea(tarea.id)}
        />
      </div>
    </li>
  );
};

export default Tarea;
