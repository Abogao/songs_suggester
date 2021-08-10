import React, { Component } from "react";
import "../Miembros.css"

class Members extends Component {
  render() {
    return (
      <ul>
        {this.props.miembros.map((props) => {
          return (
            <li className="miembros">
              <a href={props.link}>{props.nombre}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Members;
