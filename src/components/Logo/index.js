import React from 'react';
<<<<<<< HEAD
import './css/Logo.components.css';
=======
import './css/Logo.component.css';
>>>>>>> game-playground

const Logo = (props) => {
    return (
        <span className="logo-ttt" style={{fontSize: props.size}}>
            Tic 
            <span> tac </span>
            toe
        </span>
    )
}

export default Logo;