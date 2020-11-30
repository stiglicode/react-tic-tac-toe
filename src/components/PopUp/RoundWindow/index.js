import React, { useEffect, useState } from 'react';

import "./css/RoundWindow.component.css";

const AlertSectionWin = (props) =>{
    return(
        <div className="victory-alert">
            <h1>Round won</h1>
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

const RoundPopUp = (props) => {
    
    const handleContinue = () => {
        return props.reset(true);
    }
    const handleDismiss = () => {
        return props.reset(false);
    }
    return (
        <>
            <div className="w-100 column justify-center align-center victory-title">
                <h1>{(props.windowType === true) ? "Round won" : "Draw"}</h1>
                {(props.windowType === true) 
                ? 
                    <span className={`txt-${props.symbol}`}>Player {props.symbol}</span>
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
        </>
    )
};
export default RoundPopUp;
export {AlertSectionWin, AlertSectionLose};