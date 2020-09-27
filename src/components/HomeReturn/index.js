import React from 'react';
import './css/HomeReturn.component.css';

const HomeReturn = (props) => {
    const backToMainMenu = () => {
        setTimeout(() => {
            props.returnMenu(1)
        },200)
    }
    return (
        <div className="back-home pop-up m-p" onClick={backToMainMenu} style={props.style}>
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-home">
                <g stroke="null">
                    <path stroke="null" d="m27.60609,13.36027l-11.97883,-11.56562c-0.34896,-0.34016 -0.90555,-0.34016 -1.25451,0l-11.97837,11.56517c-0.17634,0.1702 -0.27592,0.40474 -0.27592,0.64984c0,0.49883 0.40439,0.90318 0.90318,0.90318l1.59185,0l0,12.64447c0,0.49883 0.40434,0.90318 0.90318,0.90318l6.32223,0c0.49883,0 0.90318,-0.40434 0.90318,-0.90318l0,-7.22541l4.51588,0l0,7.22541c0,0.49883 0.40434,0.90318 0.90318,0.90318l6.32223,0c0.49883,0 0.90318,-0.40434 0.90318,-0.90318l0,-12.64447l1.59185,0c0.24487,0 0.47919,-0.0994 0.64938,-0.27547c0.34665,-0.35867 0.33694,-0.93044 -0.02168,-1.27709l0,-0.00001zm-2.21956,0.64938"></path>
                </g>
            </svg>
        </div>
    )
}

export default HomeReturn;