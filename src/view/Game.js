import React from 'react';

// Header 
import HeaderMenu from './../components/HeaderMenu';
// PLayfield
import TurnDisplay from './../components/TurnDisplay';
import Field from './../components/Field';
import Stats from './../components/Stats';

const Game = () => (
    <div className="game-wrapper column">
        <HeaderMenu />
        <div className="playfield bs-padd">
            <TurnDisplay />
            <Field />
            <Stats />
        </div>
    </div>
);
export default Game;