import React, {useState, useEffect} from 'react';
import './css/HeaderMenu.component.css';

import Logo from './../Logo';

class ScoreCounter extends React.Component {
    constructor(props) {
        super(props);
        this.wons_X = 0;
        this.wons_O = 0;
    }
    countGames = (symbol) => {
        const wg = (this.props.status.length > 0) ? this.props.status[0] : false;
        if(wg[wg.length - 1] === symbol) {
            let counterSymbols = [];
            wg.forEach((wgs) => {
                if(wgs === symbol){
                    counterSymbols.push(wgs);
                    if(symbol === "X") {
                        return this.wons_X = counterSymbols.length;
                    } else if(symbol === "O") {
                        return this.wons_O = counterSymbols.length;
                    }
                }
            })
        } else {
            return false;
        }
    }
    render() {
        return (
            <div className="score-count b">
                <span className="txt-O">|&nbsp;&nbsp;{(!this.countGames("O")) ? this.wons_O : this.countGames("O")}</span>
                &nbsp;&nbsp;-&nbsp;&nbsp;
                <span className="txt-X">{(!this.countGames("X")) ? this.wons_X : this.countGames("X")}&nbsp;&nbsp;|</span>
            </div>
        )
    }
}
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            minutes: 0
        };
    }
    timeCounder = () => {
        setInterval(() => {
            this.setState((state,) => { 
                return {
                    ...state,
                    seconds:this.state.seconds + 1
                }
            });
            if(this.state.seconds === 60) {
                this.setState((state,) => { 
                    return {  
                        ...state,
                        seconds: 0,
                        minutes: this.state.minutes + 1
                    }
                });
                
            }
            
        }, 1000);
    }
    componentDidMount = () => {
        this.timeCounder()
    }
    render() {
        return (
            <div>
                &nbsp;<span>{(this.state.minutes <= 9) ? `0${this.state.minutes}` : this.state.minutes}</span>&nbsp;:&nbsp;<span>{(this.state.seconds <= 9) ? `0${this.state.seconds}` : this.state.seconds}</span>&nbsp;
            </div> 
        )
    }
}
const HeaderMenu = (props) => {
    return (
        <div className="h-m bs-padd-sd justify-between">
            <Logo size="1.5em" />
            <ScoreCounter status={props.gameStatus}/>
            <Timer />
        </div>
    )
    
};
export default HeaderMenu;