import React from 'react';
import Smurf from './Smurf.js';

const SmurfList = props => {
    console.log("smurflist props", props);
    return (
        <ul>
            {props.smurfs.map(smurf => {
                return <Smurf key={smurf.id} smurf={smurf} />;
            })}
        </ul>
    );
};

export default SmurfList;