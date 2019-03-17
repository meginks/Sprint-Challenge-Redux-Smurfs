import React from 'react';
import Smurf from './Smurf.js';

const SmurfList = props => {
    return (
        <div>
            {props.smurfs.map(smurf => {
                return <Smurf key={smurf.id} smurf={smurf} handleDeleteSmurf={props.handleDeleteSmurf} />;
            })}
        </div>
    );
};

export default SmurfList;