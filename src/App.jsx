import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Pokedex from './components/Pokedex'
import PokemonDetail from './components/PokemonDetail'
import PokeUser from './components/PokeUser'
import PokemonCard from './components/PokemonCard'
import ProtectedRoutes from './components/ProtectedRoutes'
import Configurate from './components/Configurate'

function App() {
	return (
		<div className='App'>
			<HashRouter>
				<div className='flotante'>
					<Link to='/configurate' className='btn-flotante'>
						<i className='fa-solid fa-gear'></i>
					</Link>
				</div>

				<Routes>
					<Route path='/' element={<PokeUser />} />
					<Route path='/configurate' element={<Configurate />} />
					<Route element={<ProtectedRoutes />}>
						<Route path='/pokedex' element={<Pokedex />} />
						<Route path='/pokedex/:id' element={<PokemonDetail />} />
					</Route>
				</Routes>
			</HashRouter>
		</div>
	)
}

export default App
