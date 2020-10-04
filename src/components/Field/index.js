import React from 'react';
import './css/Field.component.css';

import { temp_3x3 as temp } from './Grid/grid-template'; 

import Grid from './Grid';

class Field extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            girdTemplate: temp.grid,
            turn: "X",
            winner: null
        }
    }
    setGrid = (thisEle, turn) => {
        const pos = thisEle.target.getAttribute("grid");
        let template = this.state.girdTemplate;
        template.splice(pos,1, turn);

        this.setState((state, props) => { return { ...state, girdTemplate: template}});
    }
    setClass = (thisEle, turn) => {
        const className = (turn === "X") ? "set-X" : false || (turn === "O") ? "set-O" : false;
        let ele = thisEle.target.classList;
        if(ele[0] === "fld-box_border") {
            return
        } else {
            if(this.prev(thisEle)) {
                return
            } else {
                return ele.add(className)
            }
        }
    }

    prev = (e) => {
        let ele = e.target.classList;
        if(ele[2] === "set-X" || ele[2] === "set-O") return true
    }

    handeTurn = (e) => {
        if(this.prev(e)) {
            return
        } else {
            if(this.state.turn === "X") {
               this.setState((state, props) => { return { ...state, turn: "O" }});
               
            }else if(this.state.turn === "O") {
                this.setState((state, props) => { return { ...state, turn: "X"}});
            }
            this.setGrid(e, this.state.turn);
            this.setClass(e, this.state.turn);
            this.whoWon();
            return this.resetField();
        }
    }
    whoWon = () => {
        const grid = this.state.girdTemplate;

        const setWinner = (symbol) => {
            this.setState((state, props) => { return { ...state, winner: symbol }});
        }
        // Horizontal
        const x = grid;
        if(x[0] === x[1] && x[1] === x[2] && typeof x[0] === "string") return setWinner(x[0]);
        if(x[3] === x[4] && x[4] === x[5] && typeof x[3] === "string") return setWinner(x[3]);
        if(x[6] === x[7] && x[7] === x[8] && typeof x[6] === "string") return setWinner(x[6]);
        // Vertical 
        const y = grid;
        if(y[0] === y[3] && y[3] === y[6] && typeof y[0] === "string") return setWinner(y[0]);
        if(y[1] === y[4] && y[4] === y[7] && typeof y[1] === "string") return setWinner(y[1]);
        if(y[2] === y[5] && y[5] === y[8] && typeof y[2] === "string") return setWinner(y[2]);
        // Diagonal
        const xy = grid;
        if(xy[0] === xy[4] && xy[4] === xy[8] && typeof xy[0] === "string") return setWinner(xy[0]);
        if(xy[2] === xy[4] && xy[4] === xy[6] && typeof xy[2] === "string") return setWinner(xy[2]);

    }
    resetField = () => {
        const grid = document.querySelectorAll(".plyr-box");
       
        if(this.state.winner !== null){
            grid.forEach(g => {
                const gridClass = g.classList;
                if(gridClass.contains("set-X") || gridClass.contains("set-O")) {
                    gridClass.remove(gridClass[2]);
                }
            });
            this.setState((state, props) => { return { ...state, winner: null, girdTemplate: temp.grid, turn: "X" }});
            
        }
    }
    componentDidUpdate = () => {
        this.props.getTurn(this.state.turn);
        console.log(this.state.girdTemplate)
    }
    // multiplyTemplate = (...args) => {
    //     const count = (typeof args[0] === "number") ? args[0] : false; 
    //     const template = (typeof args[1] === 'function') ? args[1] : false;

    //     console.log(template())
    // }
    render() {
        return(
        <div className="fld-box">
            <div className={`fld-box_border ${temp.sheet}`} onClick={this.handeTurn}>
                {[...Array(temp.grid.length)].map((e, i) => <Grid key={i} gridID={i}/>)}
            </div>
        </div>
        )
    }
}

export default Field;