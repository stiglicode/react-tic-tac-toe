import React from 'react';
import './css/Square.component.css';

import { moveSequence } from './../../../win-move-sequence';


class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state;
    }
    handleGridEvent = (ele) => {
        if(!this.replacePrev(ele)) return
        else {
            ele.target.classList += ` ${this.props.sheet}`;
            this.props.__return_gridID({
                pos: this.props.gridID,
                symbol: this.props.symbol
            });
            if(this.props.position !== null){
                const drawPos =  this.props.position.every((dp) => {
                    return typeof dp === "string"
                })
                if(drawPos){
                    (!moveSequence(this.props.position)) ? this.props.winnerSetter(false) : this.props.winnerSetter(true); 
                }
                else {
                    (moveSequence(this.props.position)) && this.props.winnerSetter(true);
                }
            }
            return (this.props.symbol === "X") ? this.props.__return_Symbol("O") : (this.props.symbol === "O") ? this.props.__return_Symbol("X") : null
        }
    }
    replacePrev = (ele) => {
        return (ele.target.getAttribute('grid') && ele.target.classList.length === 2) ? true : false;
    }
    componentDidUpdate = () => {
    }
    render() {
        return (
            <div className="plyr-box m-p" grid={this.props.gridID} onClick={this.handleGridEvent}>
            </div>
        );
    }
}
export default Square;