import { ADD_REMINDER } from './type';

export function addReminder(text) {
    return {
        type: ADD_REMINDER,
        text
    }
    console.log('action in addReminder', action);

    return action;
}