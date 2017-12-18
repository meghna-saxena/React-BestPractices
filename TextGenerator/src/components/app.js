import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paras: 4,
            html : false,
            text: ''
        }
    }

    componentWillMount() {
        this.getText();
    }

    getText() { 
        axios.get('http://hipsterjesus.com/api/?paras='+this.state.paras+'&html='+this.state.html)
        .then((response) => {
            this.setState({text: response.data.text}, function() {
                console.log(this.state);
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>Dummy Text Generator</div>
        );
    }
}

export default App;