import React from 'react';
import {connect} from 'react-redux';
import SmurfList from './SmurfList';
import { getSmurf } from '../actions';

class SmurfListView extends React.Component {
    constructor(props) {
        super(props);
        console.log("smurflistviewprops", props.smurfs)
    }

    componentDidMount() {
        console.log("this.props.getSmurf()", this.props.getSmurf());
        this.props.getSmurf();
    }

    render() {
        return (
            <div className="smurf-list-wrapper">
            {this.props.fetchingSmurfs && <p>Getting the smurfs!</p>}
            <SmurfList smurfs={this.props.smurfs} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log ("MSP", state);
    return {
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, {getSmurf})(SmurfListView); 