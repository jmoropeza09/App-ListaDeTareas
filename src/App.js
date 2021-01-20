import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./componentes/Header";
import FormularioTareas from "./componentes/FormularioTareas";
import ListaTareas from "./componentes/ListaTareas";

const App = () => {
  // Obtenemos la tareas guardadas de localStorage
  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];

  // Establecemos el estado de las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  // Guardand el estado dentro de localStorage
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // Accedemos a localStorage y comprobamos si mostrarCompletadas es null
  let configMostrarCompletadas = "";
  if (localStorage.getItem("mostrarCompletadas") === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas =
      localStorage.getItem("mostrarCompletadas") === true;
  }

  // El estado de mostrarCompletadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(
    configMostrarCompletadas
  );
  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
};

export default App;
