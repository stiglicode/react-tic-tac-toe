import React, { useState, useEffect } from 'react';
import './css/WinnerStats.component.css'

const WinnerStats = (props) => {
    const correctSuffix = (num) => {
        if(num == 2){
            return num + "nd"
        }else if(num == 1) {
            return num + "st"
        } 
        else {
            return num + "th";
        } 
    }
    return (
        <div className={`ws-box b column p-${props.symbol}__txt`}>
            <span className="ws-gc">{correctSuffix(props.round + 1)} GAME</span>
            <span className="ws-pn">{props.players} won</span>
        </div>
    )
};
export default WinnerStats;