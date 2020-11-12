import React from 'react';
import './css/Field.component.css';

import Grid from './Grid';

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol: this.props.initialSymbol,
            winner: false,
            sheet: this.props.sheet,
            lastPosition: null,
            gridSize: this.props.temp.gridLength
        }
    }
    // componentDidMount() {
    //     console.log(this.props.temp.gridTemplate);
    //     console.log(this.state.symbol);
    // }
    
    componentDidUpdate() {
        const symbol = this.state.symbol,
        gridTemp = this.props.temp.gridTemplate,
        pos = this.state.lastPosition;
        this.props.changeAfterClick(symbol);
// -------------------------------------------------------------------
        console.log(gridTemp);
        console.log(symbol);
        console.log(pos);
    }
    handleGridEvent = (ele) => {
        const gridPos = ele.target.getAttribute('grid'),
        sheet = this.state.sheet,
        symbol = this.state.symbol,
        gridTemp = this.props.temp.gridTemplate,
        __target = ele.target,
        pos = this.state.lastPosition;

        if(!this.repeatPrev(ele)) return  
        else {
            __target.classList.add(sheet);
            this.setState({lastPosition: gridPos});
            this.changePlayer();
            this.props.update(pos, symbol);
// -------------------------------------------------------------------
           
        }
    }
    changePlayer = () => {
        if(this.state.symbol === "X") return this.setState({symbol: "O", sheet: "set-O"});      
        else if(this.state.symbol === "O") return this.setState({symbol: "X", sheet: "set-X"});
        else return false    
    }
    repeatPrev = (ele) => {
        return (ele.target.getAttribute('grid') && ele.target.classList.length === 2) ? true : false;
    }
    render() {
        return(
        <div className="fld-box">
            <div className={`fld-box_border ${this.props.temp.gridSheet}`} onClick={this.handleGridEvent}>
                {[...Array(this.state.gridSize)].map((e, i) => <Grid key={i} gridID={i}/>)}
            </div>
        </div>
        )
    }
}

export default Field;