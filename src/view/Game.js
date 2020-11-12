import React, { useState } from 'react';

// Header 
import HeaderMenu from './../components/HeaderMenu';
// PLayfield
import TurnDisplay from './../components/TurnDisplay';
import Field from './../components/Field';
import Stats from './../components/Stats';

import { normClass, numSymbol } from './../normalize-class';
import { randomize as randomSymbol} from './../randomize'
import { temp_3x3 as temp } from '../components/Field/Grid/grid-template'; 

const Game = (props) => {
    const handleAfterClick = (state) => {
        setSymbol(state);
    }
    /** 
    States
    */
    const [symbol,setSymbol] = useState(numSymbol(randomSymbol(1,2)));
    const [gridTemplate, updateGrid] = useState(temp.grid);
    const [gridLength, setGridLength] = useState(temp.grid.length);
    const [gridSheet, setGridSheet] = useState(temp.sheet);

    // -end- states

    const updateG = (pos, symbol) => {
        let template = gridTemplate;
        template.splice(pos,1, symbol);
        updateGrid(template);
    }
    return (
    <div className="game-wrapper column">
        <HeaderMenu />
        <div className={`playfield bs-padd ${normClass(symbol, "player")}`}>
            <TurnDisplay />
            <Field initialSymbol={symbol} changeAfterClick={handleAfterClick} sheet={normClass(symbol, "set")} temp={{gridSheet, gridLength, gridTemplate}} update={updateG}/>
            <Stats />
        </div>
    </div>
    )
};
export default Game;