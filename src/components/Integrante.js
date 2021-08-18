const Integrante = (props) => {
  let { memberAttributes } = props;
  let { nombre, img, sugerencias } = memberAttributes;

  return (
    <div className="CardIntegrantes">
      <img alt="" src={img}></img>
      <h3>{nombre} </h3>
      <ul>
        {sugerencias.map((sugerencia) => {
          return <li>{sugerencia}</li>;
        })}
      </ul>
    </div>
  );
};

export default Integrante;
