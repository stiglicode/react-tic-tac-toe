import React from 'react';
import { InProgress } from '../../Error/ErrorHandle';

class PvB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleName: "Player vs Bot"
        }
    }
    componentDidMount = () => {
        this.props.handleTitle(this.state.titleName);
    }
    render() {
        return (
            <div className="column menu-row_action m--pvb">
                <InProgress pageName={this.state.titleName}/>
            </div>
        )
    }
}

export default PvB;