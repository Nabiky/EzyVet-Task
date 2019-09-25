import * as actions from '../actions/actionsTypes';

export default (state = [], action) => {
    switch (action.type) {
        case actions.ADD_ITEM:
            return [...state, action.payload];
        case actions.UPDATE_CART: {
            return state.map(item => {
                if (item.itemName !== action.payload.itemName) {
                    return item;
                }
                return { ...action.payload };
            });
        }
        case actions.REMOVE_ITEM: {
            return state.filter(
                item => item.itemName != action.payload.itemName,
            );
        }
        default:
            return state;
    }
};
