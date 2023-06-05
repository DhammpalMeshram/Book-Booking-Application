import React from 'react';
import './NotFound.css'

//router imports
import { useNavigate } from 'react-router';

const NotFound = ()=>{
    const navigate = useNavigate();

    //funtion to navigate user to home
    const goToHome = ()=>{
        navigate('/');
    }
    return (
        <div id="notFound">
            <img src = "https://i.pinimg.com/originals/51/0f/49/510f4957de3eb14c591fddb875ae9c94.jpg" alt="notfound"></img>
            <div id="help">
                <h1>Oops! You seem to be lost.</h1>
                <button onClick={goToHome}>Take me Home</button>
            </div>
        </div>
    )
}

export default NotFound;