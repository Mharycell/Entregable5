import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Pokedex from './components/Pokedex'
import PokemonDetail from './components/PokemonDetail'
import PokeUser from './components/PokeUser'
import PokemonCard from "./components/PokemonCard"
import ProtectedRoutes from "./components/ProtectedRoutes"

function App() {
  

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<PokeUser/>}/>
          <Route path="/pokedex" element={<Pokedex/>}/>
          <Route path="/pokedex/:id" element={<PokemonDetail/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
