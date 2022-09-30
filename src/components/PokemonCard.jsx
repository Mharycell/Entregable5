import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './css/pokedexcard.css'

const PokemonCard = ({ url }) => {
	const [pokemons, setPokemons] = useState({})
	const navigate = useNavigate()
	const [colors, setColors] = useState({})
	const color = colors.types?.[0].type.name
	const style = `card ${color}`

	useEffect(() => {
		axios.get(url).then((res) => setPokemons(res.data))
		axios.get(url).then((res) => setColors(res.data))
	}, [])

	const darkMode = localStorage.getItem('darkMood')
	if (darkMode == '1') {
		// No
		document.body.classList = ''
	} else if (darkMode == '2') {
		// Si
		document.body.classList = 'darkMood'
	}

	return (
		<div onClick={() => navigate(`/pokedex/${pokemons.id}`)} className={style}>
			<div className='pokeinfo'>
				<h1>{pokemons.name}</h1>
				<p>
					<strong>Types:</strong> {' ' + pokemons.types?.[0]?.type.name + ', '}{' '}
					{pokemons.types?.[1]?.type.name ? pokemons.types?.[1]?.type.name : ''}
				</p>
				<p>
					{' '}
					<strong>HP: </strong> {pokemons.stats?.[0].base_stat}
				</p>
				<p>
					{' '}
					<strong>ATTACK: </strong> {pokemons.stats?.[1].base_stat}
				</p>
				<p>
					{' '}
					<strong>DEFENSE: </strong> {pokemons.stats?.[2].base_stat}
				</p>
				<p>
					{' '}
					<strong>SPEED: </strong> {pokemons.stats?.[5].base_stat}
				</p>
			</div>

			<div className='pokeimage'>
				<img src={pokemons.sprites?.other.dream_world.front_default} alt={pokemons.name} />
			</div>
		</div>
	)
}

export default PokemonCard
