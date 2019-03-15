import React from 'react';

const Smurf = props => {
    return (
    <li>
    <p>{props.smurf.name}</p>
    <p>{props.smurf.age} smurf years old</p>
    <p>{props.smurf.height} apples high</p>
    </li>
    )
};

export default Smurf;