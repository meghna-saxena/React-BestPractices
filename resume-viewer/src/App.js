import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // foo: 'bar',
      resumeData: {}
    }
  }

  getResumeData() {
    axios.get('http://localhost:3000/resumeData.json')
      .then((response) => {
        this.setState({resumeData: response.data}, function() {
          console.log(this.state);
        });
    })
      .catch((err) => {
        console.log(err);
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    console.log(this.state.resumeData);
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} />
        <Footer />
      </div>
    );
  }
}

export default App;
