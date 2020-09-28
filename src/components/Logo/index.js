import React from 'react';
import './css/Logo.components.css';

const Logo = (size) => {
    return (
        <span className="upper logo-ttt" style={{fontSize: size}}>
            Tic 
            <span> tac </span>
            toe
        </span>
    )
}

export default Logo;