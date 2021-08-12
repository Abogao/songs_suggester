import React from 'react'
import IntegrantesCard from './Integrantes'


const atributosIntegrantes=[
    {
        nombre:"Alan",
        img:"",
    },
    {
        nombre:"Poda",
        img:"",
    },
    {
        nombre:"Max",
        img:"",
    },
    {
        nombre:"Echu",
        img:"",
    },
    {
        nombre:"Negro",
        img:"",
    },
    {
        nombre:"Lio",
        img:"",
    },
    {
        nombre:"Naza",
        img:"",
    }
]



function MyBand(){
    return(
        
        <div>
             <h2>Integrantes</h2>
             
            <IntegrantesCard Integrantes={atributosIntegrantes} ></IntegrantesCard>
        </div>
    )
}
export default MyBand;