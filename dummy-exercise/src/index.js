import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Person from './components/Person';

class App extends Component {
    render() {
        return (
            <div>
                <Person name="Meggie" age="28" />
                <Person name="Max" age="29" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));