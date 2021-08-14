import React, {Component} from "react";
import "../integrantes.css"
import Sugerencias from "./Sugerencias";
class Integrantes extends Component{

    render() {
        return (
          <div>
            <div>
               {this.props.Integrantes.map(function(props){
                   return(
                       <div className="CardIntegrantes"> 
                       <img alt="" src={props.img}></img>
                       <h3>{props.nombre} </h3>
                       <Sugerencias></Sugerencias>
                       
                       </div> 
                   )
               } )}
            </div>
          </div>
        );
      }

}

export default Integrantes