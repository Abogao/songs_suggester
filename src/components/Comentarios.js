import React, { useState } from "react";

const Comentarios = () => {
  const [comentarios, setComentarios] = useState("");
  const envioComentario = (evento) => {
    setComentarios(evento.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="comentarios"
        onChange={envioComentario}
      ></input>
      <button onClick={() => setComentarios(comentarios)}>Enviar</button>
   <li>
       {envioComentario()}
   </li>
    </div>
      
  );
};
export default Comentarios;
