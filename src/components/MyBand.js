import React from 'react'
import Integrantes from './Integrantes'

const atributosIntegrantes = [
    {
      nombre: "Alan",
      img: "/imagenesCardIntegrantes/alan.png",
      sugerencias: [],
    },
    {
      nombre: "Poda",
      img: "/imagenesCardIntegrantes/poda.png",
      sugerencias: [],
    },
    {
      nombre: "Max",
      img: "/imagenesCardIntegrantes/max.png",
      sugerencias: [],
    },
    {
      nombre: "Echu",
      img: "/imagenesCardIntegrantes/echu.png",
      sugerencias: [],
    },
    {
      nombre: "Negro",
      img: "/imagenesCardIntegrantes/negro.png",
      sugerencias: [],
    },
    {
      nombre: "Lio",
      img: "/imagenesCardIntegrantes/lio.png",
      sugerencias: [],
    },
    {
      nombre: "Naza",
      img: "/imagenesCardIntegrantes/naza.png",
      sugerencias: [],
    },
  ];

function MyBand(){
    return(
        
        <div>
             <h2>Don cesar y sus peones</h2>
             
            <Integrantes integrantes={atributosIntegrantes} ></Integrantes>
        </div>
    )
}
export default MyBand;