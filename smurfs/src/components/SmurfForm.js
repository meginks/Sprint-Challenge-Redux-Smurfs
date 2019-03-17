import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends React.Component {
    state= {
        name: '',
        age: '',
        height: ''
    }
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleAddSmurf = () => { 
        const { name, age, height } = this.state; 
        this.props.addSmurf({ name, age, height }); 
        this.setState({ name: '', age: '', height: ''}); 
    };
    render() {
        return (
            <div className="add-smurf-container">
            <form onSubmit={()=> this.handleAddSmurf()}>
                <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleInputChange} /> 
                <input type="text" name="age" placeholder="age" value={this.state.age} onChange={this.handleInputChange} /> 
                <input type="text" name="height" placeholder="height" value={this.state.height} onChange={this.handleInputChange} /> 
                <button className="submit" type="submit" onClick={()=> this.handleAddSmurf()}>Add smurf!</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        addingSmurf: state.addingSmurf, 
        name: state.name,
        age: state.age,
        height: state.height
    }
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);