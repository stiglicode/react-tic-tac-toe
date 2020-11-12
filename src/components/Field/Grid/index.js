import React from 'react';
import './css/Grid.component.css';


class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="plyr-box m-p" grid={this.props.gridID}>
            </div>
        );
    }
}
export default Grid;