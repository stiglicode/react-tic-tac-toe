import React, { useEffect, useState } from 'react';

import "./css/VicotryWindow.component.css";

const AlertSectionWin = (props) =>{
    return(
        <div className="victory-alert">
            <h1>Winner is</h1>
            <span className={`txt-${props.symbol}`}>Player {props.symbol}</span>
        </div>
    )
}
const AlertSectionLose = () =>{
    return(
        <div className="victory-alert">
            <h1>Draw</h1>
            <span>None won</span>
        </div>
    )
}

const VictoryPopUp = (props) => {
    const [opacityValue, setOpacity] = useState(false);
    const [typeOfWidnow, setType] = useState(null);
    (() => {
        setTimeout(() => {
            setOpacity(true);
        },3000)
    })();
    const handleContinue = () => {
        return props.reset(true);
    }
    const handleDismiss = () => {
        return props.reset(false);
    }
    useEffect(() =>{
        if(typeOfWidnow === null) {
            setType(props.victoryDetails.victory)
        }
    }, [])

    return (
    <div className="freez-bckg bckg-darken">
        {(typeOfWidnow === true) ? <AlertSectionWin symbol={props.victoryDetails.victorySymb} /> : <AlertSectionLose />}
        <div className={`pop-up-window br-sm victory-popUp column justify-between align-center border-${props.victoryDetails.victorySymb}`} style={{opacity: (!opacityValue) ? 0 : 1}}>
            <div className="w-100 column justify-center align-center victory-title">
                <h1>{(typeOfWidnow === true) ? "Winner is" : "Draw"}</h1>
                {(typeOfWidnow === true) 
                ? 
                    <span className={`txt-${props.victoryDetails.victorySymb}`}>Player {props.victoryDetails.victorySymb}</span>
                :
                    <span>None won this game</span>
                }
            </div>
            <hr />
            <h1>Would you like continue or...?</h1>
            <hr />
            <div className="w-100 row justify-around">
                <button className="c-btn positive-btn pop-up sl-t-b" onClick={handleContinue}>Continue</button>
                <button className="c-btn negative-btn pop-up sl-t-b" onClick={handleDismiss}>Dismiss</button>
            </div>
        </div>
    </div>
    )
};
export default VictoryPopUp;