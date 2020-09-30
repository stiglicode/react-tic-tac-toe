import React from 'react';
import './css/Field.component.css';

import Grid from './Grid';
    
const Field = () => {
    const times = 9;
    return (<div className="fld-box">
        <div className="fld-box_border">
            {[...Array(times)].map((e, i) => <Grid key={i}/>)}
        </div>
    </div>
)};
export default Field;