import React from 'react';
import './css/Logo.component.css';

import { PreReleaseTitle } from '../small-stuffs';


const Logo = (props) => {
    return (
        <span className="logo-ttt" style={{fontSize: props.size}}>
            Tic 
            <span> tac </span>
            toe
            <PreReleaseTitle />
        </span>
    )
}

export default Logo;