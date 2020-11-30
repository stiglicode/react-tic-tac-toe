import React from 'react';
import './css/PvP.component.css';

class PvP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleName: "Player vs Player",
            validFor: {
                _X_: false,
                _O_: false
            },
        }
        this.inputX = React.createRef();
        this.inputO = React.createRef();
    }
    componentDidMount = () => {
        this.props.handleTitle(this.state.titleName);
    }

    handleStartGame = () => {
        this.props.actualPlayersNames({
            _X_: this.inputX.current.value, 
            _O_: this.inputO.current.value, 
        });
        return this.props.countPlayers(this.state.validFor);
    }
    handleInput = (ele) => {
        const allSymbols = (e,boolen) => {
            const symbol = `_${e.target.id.split("p")[1].toUpperCase()}_`;
            for (const key in this.state.validFor) {
                if(key === symbol){
                    const replacedKey = (symbol === "_X_") ? "_O_" : "_X_";
                    this.setState({validFor: {
                        [symbol]: boolen[0],
                        [replacedKey]: boolen[1]
                    }});
                }
            }
        } 
        if(ele.target.value !== "") {
            if(ele.target.id === "px" || ele.target.id === "po"){
                if(this.state.validFor._O_ === false && this.state.validFor._X_ === false){
                    return allSymbols(ele, [true,false])
                } else if(this.state.validFor._O_ === true || this.state.validFor._X_ === true){
                    return allSymbols(ele, [true,true])
                }
            }
        }
        if(ele.target.value === ""){
            if(this.state.validFor._O_ === true && this.state.validFor._X_ === true){
                return allSymbols(ele, [false,true])
            } else {
                this.setState({validFor: {
                    _X_: false,
                    _O_: false
                }});
            }
        }
       
    }
    render() {
        return (
            <div className="column menu-row_action m--pvp">
                <span className="pvp-title b">Write down your nicknames</span>
                <div className="setter-nicknames column">
                    <div className="nicknames sn-x">
                        <input type="text" id="px" required onChange={this.handleInput} autoComplete="off" ref={this.inputX}/>
                        <div className="label-ico lc-x">
                            <svg className="object-x show-up" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1" y1="19" x2="19" y2="1"/>
                                <line x1="19" y1="19" x2="1" y2="1"/>
                            </svg>
                        </div>
                        <label className="l-x">Player X nickname</label>
                    </div>
                    <div className="nicknames sn-o">
                        <input type="text" id="po" required onChange={this.handleInput} autoComplete="off" ref={this.inputO}/>
                        <label className="l-o">Player O nickname</label>
                        <div className="label-ico lc-o">
                            <svg className="object-o show-up" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="8"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <button className="start-g pop-up m-p sl-t-b" onClick={this.handleStartGame}>Play</button>
            </div>
        )
    }
}

export default PvP;