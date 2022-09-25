import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios"

const PokemonCard = ({url}) => {

    const [pokemons, setPokemons] = useState({})
    const navigate= useNavigate()

    useEffect(() => {
        axios.get(url)
            .then((res) => setPokemons(res.data))
    }, [])
    
   console.log(pokemons)
    return (
        <div onClick={() => navigate(`/pokedex/${pokemons.id}`)} className='card'>
            <h1>{pokemons.name}</h1>
            <p><strong>Types:</strong> {" " + pokemons.types?.[0]?.type.name + ", "} {pokemons.types?.[1]?.type.name ?  pokemons.types?.[1]?.type.name :""}
            </p>
            <p> <strong>HP: </strong> {pokemons.stats?.[0].base_stat}</p>
            <p> <strong>ATTACK: </strong> {pokemons.stats?.[1].base_stat}</p>
            <p> <strong>DEFENSE: </strong>  {pokemons.stats?.[2].base_stat}</p>
            <p> <strong>SPEED: </strong>  {pokemons.stats?.[5].base_stat}</p>
            <img src={pokemons.sprites?.other.dream_world.front_default} alt="" />
        </div>
    );
};

export default PokemonCard;