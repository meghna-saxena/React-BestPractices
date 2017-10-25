import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';
// import { bindActionCreators } from 'redux';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    //helper function for btn onClick
    addReminder() {
        // console.log('this', this);
        this.props.addReminder(this.state.text)
    }
    

    render() {
        console.log('this.props', this.props);
        return (
            <div className="App">
                <div className="title">
                    Checklist App
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input className="form-control"
                               placeholder="Write the upcoming tasks.."
                               onChange={ event => this.setState({text: event.target.value}) }
                        />
                    </div>
                    <button type="button" 
                            className="btn btn-success"
                            onClick={ () => this.addReminder() }>
                        Add Reminder
                    </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {
        reminders: state
    }
}

// since only addReminder action creator is connected instead of whole mapDispatchToProps
// refactor the code by removing the following lines 

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({addReminder}, dispatch);
// }

// export default connect (null, mapDispatchToProps) (App);


export default connect (mapStateToProps, {addReminder}) (App);