import React from 'react';
import './css/Field.component.css';

import Square from './Square';

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: {
                winnerStatus: null,
                winnerSymbol: undefined
            },
            lastPosition: null,
            totalWins: [],
            plyrNamesArr: []
        }
        this.totalWinsArr = [];
        this.playersNames = [];
    }
    callBackSymbol = (data) => {
        return this.props.returnSymbol(data);
    }
    
    setWinner = (data) => {
        if(data || !data){
            this.setState((state,) => { 
                return {
                    ...state, winner: {
                        winnerStatus: data,
                        winnerSymbol: this.props.symbol,
                    } 
                }
            });    
        }
        if(data) {
            if(this.props.symbol === "X"){
                this.totalWinsArr.push("X");
                this.playersNames.push(this.props.playersNames["_X_"]);
            }else if(this.props.symbol === "O"){
                this.totalWinsArr.push("O");
                this.playersNames.push(this.props.playersNames["_O_"]);
            }
            // for (const key in this.props.playersNames) {
            //     if(key[1] === this.props.symbol) {
            //         this.totalWinsArr.push(this.props.playersNames[key]);
            //     } 
            // }
            this.setState((state,) => { 
                return {  
                    ...state,
                    totalWins: [this.totalWinsArr],
                    plyrNamesArr: [this.playersNames]
                }
            });
        }
    }
    componentDidUpdate = () => {
        this.props.countedGames(this.state.totalWins);
        this.props.returnPlayers(this.state.plyrNamesArr);
        if(this.props.resetField === true){
            if(typeof this.state.winner.winnerSymbol === "string"){
                this.setState((state,) => { 
                    return { 
                        ...state,
                        winner: {
                            winnerStatus: null,
                            winnerSymbol: undefined
                        },
                        lastPosition: this.props.template.grid,
                    }
                });
                
            }
            const squares = document.querySelectorAll(".plyr-box");
            squares.forEach((square) => {
                const className = square.classList;
                if(className.contains("set-X")){
                    className.remove("set-X")
                }
                if(className.contains("set-O")){
                    className.remove("set-O")
                }
            })   
        }
    }
   
    callBackGridID = (data) => {
        const template = this.props.template.grid;
        template.splice(data.pos, 1, data.symbol);
        this.setState({lastPosition: template});
        return setTimeout(()=>{
            if(this.state.winner.winnerStatus !== null){
                return this.props.status(this.state.winner);
            }
        }, 1)
    }
    render() {
        return(
        <div className="fld-box">
            <div className={`fld-box_border ${this.props.template.sheet}`}>
                {[...Array(this.props.template.grid.length)].map((e, i) => 
                <Square 
                    key={i} 
                    gridID={i} 
                    __return_gridID={this.callBackGridID} 
                    sheet={this.props.sheet}
                    position={this.state.lastPosition}
                    symbol={this.props.symbol}
                    __return_Symbol={this.callBackSymbol}
                    winnerSetter={this.setWinner}
                />
                )}
            </div>
        </div>
        )
    }
}

export default Field; 