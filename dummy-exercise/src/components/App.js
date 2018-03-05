import React, { Component } from 'react';
import '../index.css';

class App extends Component {
  render() {
    return (
      <div className="person">
        <h1>{this.props.name}</h1>
        <p> Your age: {this.props.age}</p>
      </div>
    );
  }
}

export default App;
