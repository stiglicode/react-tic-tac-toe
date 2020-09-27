import React from 'react';
import { InProgress } from '../../Error/ErrorHandle';

class MP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleName: "Multiplayer"
        }
    }
    componentDidMount = () => {
        this.props.handleTitle(this.state.titleName);
    }
    render() {
        return (
            <div className="column menu-row_action m--mp">
                <InProgress pageName={this.state.titleName}/>
            </div>
        )
    }
}

export default MP;