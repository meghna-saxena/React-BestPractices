import { ADD_REMINDER, DELETE_REMINDER } from './type';

export const addReminder = (text, dueDate) => {
    const action = {
      type: ADD_REMINDER,
    //text:text ES6 shorthand
      text,
      dueDate
    }
    console.log('action in addReminder', action);
    return action;
  }
  
  export const deleteReminder = (id) => {
    const action = {
      type: DELETE_REMINDER,
      id
    }
    console.log('deleting in actions', action);
    return action;
  }