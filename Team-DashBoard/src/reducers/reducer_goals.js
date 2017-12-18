import { SET_GOALS } from '../actions/type';

export default (state = [], action) => {
    switch(action.type) {
        case SET_GOALS:
            //get list of goals from action
            const { goals } = action;
            //return goals as reducer state
            return goals;
        default:
            return state;
    }
}