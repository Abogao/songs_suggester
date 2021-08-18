import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "../integrantes.css";
import Integrante from "./Integrante";

const Integrantes = (props) => {
  const [sugerencia, setSugerencia] = useState("");
  const [destinatario, setDestinatario] = useState(null);
  const [membersList, setMembersList] = useState(props.integrantes);

  const addSugerencia = () => {
    if(!sugerencia || !destinatario) {
      window.alert("Elegi gil")
      return;
    }
    let miembro = membersList.filter(
      (miembro) => miembro.nombre === destinatario
    )[0];
    let listaActual = miembro.sugerencias;
    miembro.sugerencias = [...listaActual, sugerencia];
    setMembersList([...membersList]);
  };

  return (
    <div>
      <input
        placeholder="añadir sugerencia:"
        onChange={(e) => setSugerencia(e.target.value)}
      ></input>
      <div className="DivEleccionNombre">A quien se la queres mandar?</div>
      <div>
        <select
          className="SelectIntegrantes"
          name="text"
          placeholder="a quien le queres mandar?"
          onChange={(e) => setDestinatario(e.target.value)}
        > 
          <option value=""> </option>
          {props.integrantes.map((e) =>{
           return (
           <option value={e.nombre}> {e.nombre} </option>
           )
          })}
   
        </select>
      </div>
      <br></br>
      <Button variant="dark" onClick={addSugerencia}>
        ENVIAR
      </Button>
      <br></br>

      {membersList.map((member) => {
        return <Integrante memberAttributes={member} />;
      })}
    </div>
  );
};

export default Integrantes;
