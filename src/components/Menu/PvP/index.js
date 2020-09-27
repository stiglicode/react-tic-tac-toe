import React from 'react';
import './css/PvP.component.css';

class PvP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleName: "Player vs Player"
        }
    }
    componentDidMount = () => {
        this.props.handleTitle(this.state.titleName);
    }
    render() {
        return (
            <div className="column menu-row_action m--pvp">
                <span className="pvp-title b">Write down your nicknames</span>
                <div className="setter-nicknames column">
                    <div className="nicknames sn-x">
                        <input type="text" id="px" required/>
                        <div className="label-ico lc-x">
                            <svg className="object-x show-up" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1" y1="19" x2="19" y2="1"/>
                                <line x1="19" y1="19" x2="1" y2="1"/>
                            </svg>
                        </div>
                        <label className="l-x">Player X nickname</label>
                    </div>
                    <div className="nicknames sn-o">
                        <input type="text" id="po" required/>
                        <label className="l-o">Player O nickname</label>
                        <div className="label-ico lc-o">
                            <svg className="object-o show-up" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="8"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <button className="start-g pop-up m-p sl-t-b">Play</button>
            </div>
        )
    }
}

export default PvP;