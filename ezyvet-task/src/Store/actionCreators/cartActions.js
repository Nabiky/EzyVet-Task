import * as action from '../actions/actionsTypes';

export function addItem(payload) {
    return {
        type: action.ADD_ITEM,
        payload: payload,
    };
}

export function updateCart(payload) {
    return {
        type: action.UPDATE_CART,
        payload: payload,
    };
}

export function removeItem(payload) {
    return {
        type: action.REMOVE_ITEM,
        payload: payload,
    };
}
