import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    //helper function for btn onClick
    addReminder() {
        console.log('this.state', this.state);
    }
    

    render() {
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

export default App;