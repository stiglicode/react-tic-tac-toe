import React from 'react';

const InProgress = (props) => {
    return (
        <div style={{fontSize: "20px", textAlign:"center",display: "flex", flexDirection: "column"}}>
            <span style={{color: "var(--player-x-hue)"}}>
                <span style={{fontWeight: "700"}}>{props.pageName} </span>
                is in progress
            </span>
            <span style={{color: "var(--player-x-hue)"}} >Please, return home 🏠</span>
        </div>
        
    )
}

export { InProgress };