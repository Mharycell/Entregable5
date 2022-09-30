import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { produceWithPatches } from 'immer'

const PokemonDetail = () => {
	const { id } = useParams()
	const [pokemon, setPokemon] = useState({})

	useEffect(() => {
		axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => setPokemon(res.data))
	}, [id])

	const color = pokemon.types?.[0].type.name
	document.body.className = `${color}`

	// * Stats bases

	return (
		<div className='cont-pokeinfo'>
			<div className='cont-pokeinfo_header'>
				<Link to='/pokedex' className='returndetail'>
					<i className='fa-solid fa-rotate-left'></i>
				</Link>
				<div className='cont-pokeinfo_logo'>
					<img
						className='logo'
						src='https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png'
						alt='Logo Pokemon'
					/>
				</div>
			</div>

			<div className='detail'>
				<div className='left'>
					<div className='frame div'>
						<div>
							<img src={pokemon.sprites?.other.dream_world.front_default} alt='' />
						</div>
						<div className='hw'>
							<p>
								{' '}
								<b>{pokemon.height}</b> <br /> Heigth{' '}
							</p>
							<p>
								{' '}
								<b>{pokemon.weight}</b> <br /> Weigth{' '}
							</p>
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
						<div className='type div'>
							<h2>Type</h2>
							<div className='flex'>
								{pokemon.types?.map((type) => (
									<p className={type.type.name} key={type.type.name}>
										{type.type.name}
									</p>
								))}
							</div>
						</div>
						<div className='abilities div'>
							<h2>Abilities</h2>
							<div className='flex'>
								{pokemon.abilities?.map((ability) => (
									<p key={ability.ability?.name}>{ability.ability?.name}</p>
								))}
							</div>
						</div>
					</div>
					<div className='stats'>
						<h2>Stats bases</h2>
						<div className='stats-container'>
							<div className='up'>
								<div className='stats-bg'>
									<div className='outer'>
										<div className='inner'>
											<div id='number'>{pokemon.stats?.[0].base_stat}</div>
										</div>
									</div>
									<svg xmlns='http://www.3.org/2000/svg' version='1.1' width='160px' height='160px'>
										<defs>
											<linearGradient id='GradienColor'>
												<stop offset='0%' stopColor='#DA22FF' />
												<stop offset='100%' stopColor='#9733EE' />
											</linearGradient>
										</defs>
										<circle cx='80' cy='80' r='70' strokeLinecap='round' />
									</svg>
								</div>
								<br />
								<br />
								<div className='stats-bg'>
									<div className='outer'>
										<div className='inner'>
											<div id='number'>{pokemon.stats?.[1].base_stat}</div>
										</div>
									</div>
									<svg xmlns='http://www.3.org/2000/svg' version='1.1' width='160px' height='160px'>
										<defs>
											<linearGradient id='GradienColor'>
												<stop offset='0%' stopColor='#555' />
												<stop offset='100%' stopColor='#fff' />
											</linearGradient>
										</defs>
										<circle cx='80' cy='80' r='70' strokeLinecap='round' />
									</svg>
								</div>
							</div>
							<div className='down'>
								<div className='stats-bg'>
									<div className='outer'>
										<div className='inner'>
											<div id='number'>{pokemon.stats?.[2].base_stat}</div>
										</div>
									</div>
									<svg xmlns='http://www.3.org/2000/svg' version='1.1' width='160px' height='160px'>
										<defs>
											<linearGradient id='GradienColor'>
												<stop offset='0%' stopColor='#555' />
												<stop offset='100%' stopColor='#fff' />
											</linearGradient>
										</defs>
										<circle cx='80' cy='80' r='70' strokeLinecap='round' />
									</svg>
								</div>
								<br />
								<br />
								<div className='stats-bg'>
									<div className='outer'>
										<div className='inner'>
											<div id='number'>{pokemon.stats?.[5].base_stat}</div>
										</div>
									</div>
									<svg xmlns='http://www.3.org/2000/svg' version='1.1' width='160px' height='160px'>
										<defs>
											<linearGradient id='GradienColor'>
												<stop offset='0%' stopColor='#555' />
												<stop offset='100%' stopColor='#fff' />
											</linearGradient>
										</defs>
										<circle cx='80' cy='80' r='70' strokeLinecap='round' />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='rigth'>
					<div className='counters'>
						<button className='btnsend' style={{ width: '95%' }}>
							counters
						</button>
					</div>
					<div className='rigth-img-bg'>
						<div className='gif'>
							<img
								src={
									pokemon.sprites?.versions['generation-v']['black-white'].animated.front_default
								}
								alt=''
							/>
						</div>
						<div>
							<img src={pokemon.sprites?.other.home.front_default} alt='' />
						</div>
						<div>
							<img
								src={pokemon.sprites?.versions['generation-iii']['firered-leafgreen'].front_default}
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='scroll-bg'>
				<div className='scroll-div'>
					<div className='scroll-object'>
						<h2>Movements</h2>
						<div>
							{pokemon.moves?.map((item, index) => {
								return <p key={index}>{item.move.name}</p>
							})}
						</div>
					</div>
				</div>

				<br />
				<br />
			</div>
		</div>
	)
}

export default PokemonDetail
