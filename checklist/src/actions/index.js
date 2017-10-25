import { ADD_REMINDER, DELETE_REMINDER } from './type';

export function addReminder(text) {
    console.log('action in addReminder', text);
    return {
        type: ADD_REMINDER,
        payload: text
    }
}

export function deleteReminder(id) {
    console.log('action in addReminder', id);
    return {
        type: DELETE_REMINDER,
        payload: id
    }
}