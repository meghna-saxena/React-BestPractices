import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './add_goal';

class App extends Component {
    signOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div>
                <h3>Goals</h3>
                <AddGoal />
                <div>Goal List</div>
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