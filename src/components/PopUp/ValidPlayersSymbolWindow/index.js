import React, { useEffect, useState } from 'react';

import "./css/ValidPlayersSymbolWindow.component.css";

const ValidPlayerPopUp= (props) => {
    const handleContinue = () => {
        return props.reset(false);
    }
    const handleDismiss = () => {
        return props.reset(true);
    }
    return (
        <>  
            <hr />
            {props.symbol.map((e,i) => {
                return (
                        <span key={i}>
                            <h2 style={{display: "inline", fontWeight: "100"}} className={`txt-${e}`}>For</h2>
                            <h1 style={{display: "inline"}} className={`txt-${e}`}>&nbsp;{e}&nbsp;</h1>
                            <h2 style={{display: "inline", fontWeight: "100"}} className={`txt-${e}`}>you will play as</h2>
                            <h1 style={{display: "inline"}} className={`txt-${e}`}>&nbsp;Player&nbsp;{e}</h1>
                        </span>
                )
            })}
            <hr />
            <h1>Would you like continue ?</h1>
            <hr />
            <div className="w-100 row justify-around">
                <button className="c-btn positive-btn pop-up sl-t-b" onClick={handleContinue}>Play</button>
                <button className="c-btn negative-btn pop-up sl-t-b" onClick={handleDismiss}>Set name</button>
            </div>
        </>
    )
};
export default ValidPlayerPopUp;