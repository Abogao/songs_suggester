import React, { useEffect, useState } from 'react'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const [pokemonFiltered, setPokemonFiltered] = useState([])

    useEffect(() => {
       fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then(response => response.json())
            .then(data => {
                setPokemon(data.results)
                setPokemonFiltered(data.results)
            });
    }, [])

    const filterPokemon = (event) => {
        let {value} = event.target;
        setPokemonFiltered(pokemon.filter(poke=> poke.name.includes(value)));
    }

    return (
        <div>
            <input type="text" onChange={filterPokemon}></input>
            <div>
             {pokemonFiltered.length > 0 && pokemonFiltered.map(poke => {
                return <div>{poke.name}</div> 
             } )}
            </div>
        </div>
    )
}


export default Pokemon;
