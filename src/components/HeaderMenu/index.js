import React from 'react';
import './css/HeaderMenu.component.css';

import Logo from './../Logo'

const ScoreCounter = () => {
    return (
        <div className="score-count b">
            |&nbsp;&nbsp;1&nbsp;&nbsp;-&nbsp;&nbsp;1&nbsp;&nbsp;|
        </div>
    )
}

const HeaderMenu = () => {
    return (
        <div className="h-m bs-padd-sd justify-between">
            <Logo size="1.5em" />
            <ScoreCounter />
        </div>
    )
    
};
export default HeaderMenu;