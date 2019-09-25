import * as actions from '../actions/actionsTypes';

export default (state = [], action) => {
    switch (action.type) {
        case actions.SET_DATA:
            return action.payload;
        default:
            return state;
    }
};
