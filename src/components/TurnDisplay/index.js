import React, { useState, useEffect } from 'react';
import './css/TurnDisplay.component.css'

const TurnDisplay = (props) => {
    const [playerName, setPlayerName] = useState("");
    const updatePalyerName = () => {
        const symbols = props.symbol;
        const names = props.playerName;
            for (const nameKey in names) {
                if(symbols === nameKey[1]){
                    setPlayerName(names[nameKey])
                }
            }
    }
    useEffect(() => {
        updatePalyerName()
    })
    return (
    <div className="turn-D-box column">
        <span className="turner-name">{(playerName.length <= 4) ? <><h4 style={{display: "inline"}}>{playerName}</h4> is on turn</> : <h4 style={{display: "inline"}}>{playerName}</h4>}</span>
        <span className="turner">on turn</span>
    </div>
    )
}

export default TurnDisplay;