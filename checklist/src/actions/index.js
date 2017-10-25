import { ADD_REMINDER } from './type';

export function addReminder(text) {
    console.log('action in addReminder', text);
    return {
        type: ADD_REMINDER,
        payload: text
    }
}