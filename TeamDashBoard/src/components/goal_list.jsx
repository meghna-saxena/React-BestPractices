import React, { Component } from 'react';
import { goalRef } from '../firebase';

class GoalList extends Component {
    componentDidMount() {
        goalRef.on('value', snap => {
            let goals = []
            snap.forEach(goal => {
                //let goalObject = goal.val();
                //since goalObject has email & title
                const { email, title } = goal.val();
                // console.log('goalObject', goalObject);
                // goals.push(goalObject); => rewrite
                goals.push({ email, title });
            })
            console.log('goals', goals);
        })
    }

    render() {
        return (
            <div>GoalList</div>

        );
    }
}

export default GoalList;