import * as actions from '../actions/actionsTypes';
import { fetchCatalog } from '../api.js';
import _ from 'lodash';

const setData = response => {
    return {
        type: actions.SET_DATA,
        payload: response,
    };
};
export const showData = payload => async dispatch => {
    //dispatch(getState(LOADING));
    const response = await fetchCatalog(payload);
    console.log(response);
    dispatch(setData(response));
    //dispatch(getState(SUCCESS));
};
