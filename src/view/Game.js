import React, { useState, useEffect } from 'react';

// Header 
import HeaderMenu from './../components/HeaderMenu';
// PLayfield
import TurnDisplay from './../components/TurnDisplay';
import Field from './../components/Field';
import Stats from './../components/Stats';

const Game = () => {
    const [onTurn, setTurn] = useState(null);

    const callTurn = (turn) => {
        setTurn(turn);
    }
    const callClass = () => {
        const reset = (onTurn === null) ? setTurn("X") : false;
        if(onTurn === "X") {
            return "player-X"
        } else  if(onTurn === "O") {
            return "player-O"
        }
        return reset;
    }
    return (
    <div className="game-wrapper column">
        <HeaderMenu />
        <div className={`playfield bs-padd ${callClass()}`}>
            <TurnDisplay />
            <Field getTurn={callTurn} />
            <Stats />
        </div>
    </div>
    )
};
export default Game;