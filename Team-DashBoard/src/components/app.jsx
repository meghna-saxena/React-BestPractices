import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './add_goal';
import GoalList from './goal_list';
import CompleteGoalList from './complete_goal_list';

class App extends Component {
    signOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div style={{margin: '5px'}}>
                <h3>Team Dashboard</h3>
                <AddGoal />
                <hr />
                <h4>Goals</h4>
                <GoalList />
                <hr />
                <h4>Complete Goals</h4>
                <CompleteGoalList />
                <hr />
                <button 
                    className="btn btn-danger"
                    onClick={() => this.signOut()}
                >
                Sign Out
                </button>
            </div>
        );
    }
}

function mapstateToProps(state) {
    console.log('state', state);
    //returning an empty object to avoid any error
    return {}
}

export default connect (mapstateToProps, null) (App);