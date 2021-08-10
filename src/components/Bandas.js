import React, { Component } from "react";
import Members from "./Members"
import Comentarios from "./Comentarios";


class Bandas extends Component {
  renderGroup(listaBandas) {
    return listaBandas.map(function (props) {
      return (
        
        <li>
          <img width="250px" alt="" src={props.img}></img>
          <div>
            {props.name}
           <Members miembros={props.members}></Members>
           <Comentarios></Comentarios>
          </div>
          
           
         
        </li>
        
      );
    });
  }

  render() {
    return (
      <div>
        <h1> Bandas</h1>
        <div className="">
          <ul className="listaBandas">
            {this.renderGroup(this.props.listaBandas)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Bandas;
