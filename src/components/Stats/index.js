import React, { useEffect, useState } from 'react';
import './css/Stats.component.css'

// component 
import WinnerStats from './WinnerStats';

const Stats = (props) => {
    return (
    <div className="sts-box">
        <div className="column sts-container">
            <div className="sts-container_title column">
                <span className="sts-container_title-static">Statistics in</span>
                <span className="sts-container_title-dyniamic b">5 Games</span>
            </div>
            <div className="sts-container_content bs-padd">
                {(typeof props.countedGames === "object" && props.countedGames.length >= 1) && [...Array(props.countedGames[0].length)].map((e, i) => {
                    return (
                    <WinnerStats 
                        key={i} 
                        symbol={props.countedGames[0][i]}
                        round={i}
                        players={(props.players.length === 1) && props.players[0][i]}
                    />)
                })}
            </div>
        </div>
    </div>
    )
};
export default Stats;