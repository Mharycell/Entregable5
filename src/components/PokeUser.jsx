import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { changeName } from '../store/slices/userName.slice';
import ash from "../assets/ash.png";

const PokeUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [pokeName, setPokeName] = useState("")

    const handleinput = () => {
        dispatch(changeName(pokeName))
        navigate("/pokedex")
    }

    return (
        <div className='form'>   
            <img className='trainer' src={ash} alt="" />     
            <h1>Hello trainer!</h1>
            <div className='form-info'>
                <input className='input' type="text" 
                    value={pokeName}
                    onChange= {e => setPokeName(e.target.value)}
                    placeholder= "Write your name"
                />

                <button className='btnsend' onClick={handleinput}>
                    <i className='fa-solid fa-paper-plane'></i>
                </button>
            </div>
        </div>
    );
};

export default PokeUser;