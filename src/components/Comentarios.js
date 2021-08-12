import React, { useState } from "react";

const Comentarios = () => {
  const [comentario, setComentario] = useState("");
  const envioComentario = (evento) => {
    setComentario(evento.target.value);
  };
  const [cajaComentarios, setCajaComentarios] = useState([]);

  const addComment = () => {
    cajaComentarios.push(comentario);
    setCajaComentarios(cajaComentarios);
  };

  const clearComments = () => {
    setCajaComentarios([])
  };

  return (
    <div>
      <input
        type="text"
        className="comentarios"
        onChange={envioComentario}
      ></input>
      <button onClick={() => addComment()}>Enviar</button>
      <button onClick={() => clearComments()}>Borrar</button>
      <ol>
        {cajaComentarios.map((item) => {
          return <li> {item} </li>;
        })}
      </ol>
    </div>
  );
};
export default Comentarios;
