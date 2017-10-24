import { ADD_REMINDER } from '../actions/type';

const reminder = (action) => {
    return {
        text: action.payload,
        id: Math.random()
    }
}

export default function(state = [], action) {
    let reminders = null;

	switch(action.type) {
        case ADD_REMINDER:
        reminders = [...state, reminder(action)];
        console.log('reminders as state', reminders);
        return reminders;
    default:
        return state;
    }
}