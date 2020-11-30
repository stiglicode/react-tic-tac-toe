import React, { useEffect } from 'react';

const PopUp = (props) => {
    useEffect(() =>{
        for(var prop in props) {
            if(props.hasOwnProperty(prop)) {
                if(prop === "isMounted"){
                    props.isMounted(true);
                    return() => {
                        props.isMounted(false);
                    }
                }else {
                    return
                }
            }
        }
    }, [])
    return (
        <div className="freez-bckg bckg-darken">
            {props.content.map((Content, key) => (
                <React.Fragment key={key}>{Content}</React.Fragment>
            ))}
        </div>
    )
};
const PopUpContainer = (props) => {
    return (
        <div className={`pop-up-window br-sm column justify-between align-center ${props.className}`} style={props.style}>
            {props.content.map((Content, key) => (
                <React.Fragment key={key}>{Content}</React.Fragment>
            ))}
        </div>
    )
} 
export {PopUp, PopUpContainer};