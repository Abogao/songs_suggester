import React, {Component} from "react";
import "../integrantes.css"
import Sugerencias from "./Sugerencias";
class Integrantes extends Component{

    render() {
        return (
          <div>
            <h1> Bandas</h1>
            <div>
               {this.props.Integrantes.map(function(props){
                   return(
                       <div className="CardIntegrantes"> 
                       <img alt="" src={props.img}></img>
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