import React from 'react'
import Integrantes from './Integrantes'



const atributosIntegrantes=[
    {
        nombre:"Alan",
        img: "/imagenesCardIntegrantes/alan.png",
    },
    {
        nombre:"Poda",
        img:"/imagenesCardIntegrantes/poda.png",
    },
    {
        nombre:"Max",
        img: "/imagenesCardIntegrantes/max.png",
    },
    {
        nombre:"Echu",
        img:"/imagenesCardIntegrantes/echu.png",
    },
    {
        nombre:"Negro",
        img:"/imagenesCardIntegrantes/negro.png",
    },
    {
        nombre:"Lio",
        img:"/imagenesCardIntegrantes/lio.png",
    },
    {
        nombre:"Naza",
        img:"/imagenesCardIntegrantes/naza.png",
    }
]



function MyBand(){
    return(
        
        <div>
             <h2>Don cesar y sus peones</h2>
             
            <Integrantes Integrantes={atributosIntegrantes} ></Integrantes>
        </div>
    )
}
export default MyBand;