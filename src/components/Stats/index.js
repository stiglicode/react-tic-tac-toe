import React from 'react';
import './css/Stats.component.css'

// component 
import WinnerStats from './WinnerStats';

const Stats = () => (
    <div className="sts-box">
        <div className="column sts-container">
            <div className="sts-container_title column">
                <span className="sts-container_title-static">Statistics in</span>
                <span className="sts-container_title-dyniamic b">5 Games</span>
            </div>
            <div className="sts-container_content bs-padd">
                <WinnerStats />
            </div>
        </div>
    </div>
);
export default Stats;