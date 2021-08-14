import React, { useState } from "react";

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
      <button onClick={() => añadirSugerencia()}>Enviar</button>
      <button onClick={() => borrarLista()}>Borrar</button>
      <ol>
        {listaSugerencias.map((item) => {
          return <li> {item} </li>;
        })}
      </ol>
    </div>
  );
};

export default Sugerencias;
