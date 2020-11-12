import React from 'react';
import './css/MainMenu.component.css'

class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleName: "Main menu",
        }
    }
    componentDidMount = () => {
        this.props.handleTitle(this.state.titleName);
        
    }
    handleClick = (e) => {
        const eventType = e.target;
        setTimeout(() => {
            this.props.handleMenuChange(+eventType.getAttribute('data-key'));
        }, 200)
    } 
    render() {
        return (
            <div className="column menu-row_action m--mm">
                <span className="m-m-row pop-up m-p sl-t-b" onClick={this.handleClick} data-key="2">Player vs Player</span>
                <span className="m-m-row pop-up m-p sl-t-b" onClick={this.handleClick} data-key="3">Player vs BOT</span>
                <span className="m-m-row pop-up m-p sl-t-b" onClick={this.handleClick} data-key="4">Multiplyer</span>
            </div>
        )
    }
}

export default MainMenu;