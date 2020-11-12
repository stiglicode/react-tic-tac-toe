import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import './css/Logo.components.css';
=======
import './css/Logo.component.css';
>>>>>>> game-playground
=======
import './css/Logo.component.css';
>>>>>>> main-menu

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