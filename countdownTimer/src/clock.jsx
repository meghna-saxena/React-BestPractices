import React, { Component } from 'react';
import './app.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
        // console.log('this props', this.props);
    }
    
    componentWillMount() {
        //this lifecycle method allows us to calculate the passed props data and current date
        //before rendering on the screen

        //once we have the data, update state of the application
        this.getTimeUntil(this.props.deadline);
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        console.log('time', time);

        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));

        console.log('seconds', seconds,'minutes', minutes,'hours', hours, 'days', days);
    
        //update the state
        // this.setState({days:days, hours:hours, minutes:minutes, seconds:seconds});
        // use key:value shorthand syntax -
        this.setState({days, hours, minutes, seconds});
      }

    render() {
        return (
            <div>
                <div className="Clock-days">{this.state.days} days</div>
                <div className="Clock-hours">{this.state.hours} hours</div>
                <div className="Clock-minutes">{this.state.minutes} minutes</div>
                <div className="Clock-seconds">{this.state.seconds} seconds</div>
            </div>
        );
    }
}
 export default Clock;