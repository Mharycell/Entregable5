import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from "axios"


const PokemonDetail = () => {

    const {id} = useParams()
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemon(res.data))
    }, [id])
    
    const color = pokemon.types?.[0].type.name
    document.body.className = `${color}`
    const reset = () => {
        document.body.className= "white"
    }
    
console.log(pokemon)
    return (
        <div className='cont-pokeinfo'>
            <div className='cont-pokeinfo_header'>
                <Link onClick={reset} to="/pokedex"><i class="fa-solid fa-rotate-left"></i></Link>
                <div className='cont-pokeinfo_logo'>
                <img className= "logo"
                            src='https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png'
                            alt='Logo Pokemon'                        
                        />
                </div>
            </div>

            <div className='detail'>
                <div className='left'>
                    <div className='frame'>
                        <div>
                            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                        </div>
                        <div className='hw'>
                            <p> <b>{pokemon.height}</b> <br /> Heigth </p>
                            <p> <b>{pokemon.weight}</b> <br /> Weigth </p>
                        </div>
                        <div className='number-name'>
                            <hr />
                            <div>
                                <h1>{pokemon.name}</h1>
                                <b>{`# ${pokemon.id}`}</b>
                            </div>
                            <hr />
                        </div>
                        
                    </div>
                    <div className='type-abilities'>
                            <div className='type'>
                                <h2>Type</h2>
                                <div className='flex'>
                                    {pokemon.types?.map(type => (
                                        <p className={type.type.name}
                                         key={type.type.name}>
                                            {type.type.name}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className='abilities'>
                                <h2>Abilities</h2>
                                <div className='flex'>
                                    {pokemon.abilities?.map(ability => (
                                        <p key={ability.ability?.name} >
                                            {ability.ability?.name}
                                        </p>
                                    ))}
                                </div>       
                            </div>
                    </div>
                    <div className='stats'>
                            <h2>Stats bases</h2>
                            <p> <strong>HP: </strong> {pokemon.stats?.[0].base_stat}</p>
                            <p> <strong>ATTACK: </strong> {pokemon.stats?.[1].base_stat}</p>
                            <p> <strong>DEFENSE: </strong>  {pokemon.stats?.[2].base_stat}</p>
                            <p> <strong>SPEED: </strong>  {pokemon.stats?.[5].base_stat}</p>
                    </div> 
                    <div className='movements'>
                        <h2>Movements</h2>
                        
                            <div>
                                {pokemon.moves?.map((item, index)=> {
                                    return (
                                        <p key={index}>
                                            {item.move.name} 
                                        </p>
                                    )
                                })}
                            </div>
                           
                    </div>                  
                </div>
                <div className='rigth'>
                    <div className='counters'>
                        <button className='btnsend'>counters</button>
                    </div>                    
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;