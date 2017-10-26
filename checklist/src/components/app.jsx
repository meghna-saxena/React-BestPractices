import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder } from '../actions';
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

    deleteReminder(id) {
        // console.log('deleting in application', id);
        // console.log('this.props', this.props);
        this.props.deleteReminder(id);
    }

    renderReminders() {
        //return <ul> of reminders submitted by user
        const {reminders} = this.props;
        console.log('reminders', reminders);

        return (
            <ul className="list-group col-sm-4">
                {reminders.map(reminder => {
                    return (
                        <li key={reminder.id} className="list-group-item">
                            <div className="list-item">{reminder.text}</div>
                            <div className="list-item delete-button"
                                onClick={() => this.deleteReminder(reminder.id)}>
                                {/* X */}
                                {/* unicode icon for delete */}
                                &#x2715;
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

    render() {
        return (
            <div className="App">
                <div className="title">
                    Checklist App
                </div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input className="form-control"
                               placeholder="Tasks.."
                               onChange={ event => this.setState({text: event.target.value}) }
                        />
                        <input className="form-control"
                               type="datetime-local"
                        />
                    </div>
                    <button type="button" 
                            className="btn btn-success"
                            onClick={ () => this.addReminder() }>
                        Add Reminder
                    </button>
                </div>
                { this.renderReminders() }
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


export default connect (mapStateToProps, {addReminder, deleteReminder}) (App);