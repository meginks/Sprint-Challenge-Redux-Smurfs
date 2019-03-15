import React from 'react';
import { deleteSmurf } from '../actions';

const Smurf = props => {
    return (
    <div className="smurf-container">
    <h2>{props.smurf.name}</h2>
    <p>{props.smurf.age} smurf years old</p>
    <p>{props.smurf.height} apples high</p>
    <button onClick={() => deleteSmurf()}>Feed {props.smurf.name} to Gargamel</button>
    </div>
    )
};

export default Smurf;