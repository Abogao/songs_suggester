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

  const renderComments = () => {
    return cajaComentarios.map((comentario, index) => {
      return (<li key={index}>{comentario}</li>)
    })
  }

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
        {renderComments()}
      </ol>
    </div>
  );
};
export default Comentarios;
