import React from 'react';
import { Link } from "react-router-dom"
import { useLocalStorage } from '../hooks/useLocalStorage';

const Configurate = () => {

    const [dark, setDark] = useLocalStorage("", )
    const darkMood = () => {
        const btnSwitch= document.querySelector("#switch")
            btnSwitch?.addEventListener("click",()=> {
            document.body.classList.toggle("darkMood")
            btnSwitch.classList.toggle("active")
            // Guardamos el modo dark en el localStorage
            // if (document.body.classList.contains("darkMood")) {
            //     localStorage.setItem("dark-mode", "true")
            // } else {
            //     localStorage.setItem('dark-mode', 'false')
            // }
        })

        //obtenemos el modo actual, se agrega o se elimina, de cuerdo a la elección del
        // if (localStorage.getItem("dark-mode") === "true") {
        //     document.body.classList.add('darkMood')
		// 	btnSwitch.classList.add('active')
        // } else {
        //     document.body.classList.remove('darkMood')
		// 	btnSwitch.classList.remove('active')
        // }
    }

    return (
        <div className='total-cont'>
            <Link to="/pokedex"><i class="fa-solid fa-rotate-left"></i></Link>
            <h1>Settings</h1>

            <div className='mood'>
                <h2>Theme</h2>

                <div className='ld'>
                <p>Ligth</p> 
                <button onClick={darkMood} className="switch" id="switch">
                    <span><i className="fa-solid fa-sun"></i></span>
                    <span><i className="fa-solid fa-moon"></i></span>
                </button>
                <p>Dark</p>
                </div>
                
            </div>
            <br />
            <br />

            <div className='options'>
               <h2> Item per page </h2> 
                <select className="select" id="">
                <option value="">4 Items</option>
                <option value="">8 Items</option>
                <option value="">12 Items</option>
                <option value="">16 Items</option>
                <option value="">20 Items</option>                
                </select>
            </div>
        </div>
    );
};

export default Configurate;