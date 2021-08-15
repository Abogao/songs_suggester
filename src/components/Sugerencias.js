import React, { useState } from "react";
import Button from "react-bootstrap/Button"

const Sugerencias = () => {
  const [sugerencia, setSugerencia] = useState("");
  const handleSugerencia = (e) => {
    setSugerencia(e.target.value);
  };
  const [listaSugerencias, setListaSugerencias] = useState([]);

  const añadirSugerencia = () => {
    
    setListaSugerencias([...listaSugerencias, sugerencia]);
  };

  const borrarLista = () => {
    setListaSugerencias([]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Agregue su sugerencia:"
        onChange={handleSugerencia}
      ></input>
      <Button variant="dark" onClick={() => añadirSugerencia()}>Enviar</Button>
      <Button onClick={() => borrarLista()}>Borrar</Button>
      <ol>
        {listaSugerencias.map((item) => {
          return <li> {item} </li>;
        })}
      </ol>
    </div>
  );
};

export default Sugerencias;
