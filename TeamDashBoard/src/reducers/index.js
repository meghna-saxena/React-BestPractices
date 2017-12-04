import { SIGNED_IN } from '../actions/type';

let user = {
    email: null
}

export default (state = user, action) => {
    switch(action.type) {
        case SIGNED_IN:
            //get email from action
            const { email } = action;
            user = {
            //es6 shorthand syntax
                email
            }
            return user;
        default:
            return state;
    }
}