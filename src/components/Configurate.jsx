import React from 'react';
import { Link } from "react-router-dom"
import "./css/configurate.css"

const Configurate = () => { 
    
	const darkMood = () => {
		const darkMode = localStorage.getItem('darkMood')
		const Switch = document.getElementById('switch')
		if (darkMode == '1') {
			// No
			localStorage.setItem('darkMood', 2)
			document.body.classList.add('darkMood')
			Switch.classList.add('active')
		} else {
			// Si
			localStorage.setItem('darkMood', 1)
			document.body.classList.remove('darkMood')
			Switch.classList.remove('active')
		}
	}
    
    return (
			<div className='total-cont'>
				<Link to='/pokedex'>
					<i class='fa-solid fa-rotate-left'></i>
				</Link>
				<h1>Settings</h1>

				<div className='mood'>
					<h2>Theme</h2>

					<div className='ld'>
						<p>Ligth</p>
						<button onClick={() => {darkMood()}} className='switch' id='switch'>
							<span>
								<i className='fa-solid fa-sun'></i>
							</span>
							<span>
								<i className='fa-solid fa-moon'></i>
							</span>
						</button>
						<p>Dark</p>
					</div>
				</div>
				<br />
				<br />

				<div className='options'>
					<h2> Item per page </h2>
					<select className='select' id=''>
						<option value=''>4 Items</option>
						<option value=''>8 Items</option>
						<option value=''>12 Items</option>
						<option value=''>16 Items</option>
						<option value=''>20 Items</option>
					</select>
				</div>
			</div>
		)
};

export default Configurate;