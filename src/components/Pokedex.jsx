import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PokemonCard from "./PokemonCard"
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])
    const [namePokemon, setNamePokemon] = useState("")
    const navigate = useNavigate()
    const [typePokemon, setTypePokemon] = useState([])
    const name = useSelector(state => state.userName)
    
    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        .then(res => setPokemons(res.data.results))
      axios.get("https://pokeapi.co/api/v2/type/") 
        .then(res => setTypePokemon(res.data.results))
    }, [])
    
    const searchNamePokemon = () => {
        navigate(`/pokedex/${namePokemon}`)
    }

    const searchTypePokemon = (urlPokemon) => {
        if(urlPokemon) {axios.get(urlPokemon)
            .then(res => setPokemons(res.data.pokemon.map(pokemon => pokemon.pokemon)))}
    }

   
    return (
        <div>
            <div className='header'>

                <div className='header-info'>
                    <h1>Pokedex</h1>
                    <p>Welcome  <strong>{name}</strong>, here you can find your favorite pokemon</p>
                </div>

                <div className='header-home'>
                <Link className='btnsend' to="/"><i className="fa-solid fa-house-chimney"></i></Link>
                </div>

            </div>

            <div>
                <input className='input' type="text"
                    placeholder='Search for name'
                    value={namePokemon}
                    onChange= {e => setNamePokemon(e.target.value)} />
                <button onClick={searchNamePokemon} className='btnsend'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <select className="input" id="" onChange={e => searchTypePokemon(e.target.value)}>
                    <option value="">Search for type</option>
                    {typePokemon.map(type => (
                        <option value={type.url} key= {type.url}>{type.name}</option>
                    )) }
                </select>
            </div>
            <hr />
            <div className='card-container'>
                {pokemons.map((pokemon) => {
                    return (
                        <PokemonCard key={pokemon.name }
                                    url={pokemon.url }
                        />
                    )
                })}
            </div>
            
        </div>
    );
};

export default Pokedex;