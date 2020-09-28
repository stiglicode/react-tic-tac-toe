import React from 'react';
import './css/Logo.components.css';

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