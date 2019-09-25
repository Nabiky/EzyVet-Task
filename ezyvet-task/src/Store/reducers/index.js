import { combineReducers } from 'redux';
import catalogReducers from './catalogReducers';
import cartReducers from './cartReducers';

export default combineReducers({
    catalog: catalogReducers,
    cart: cartReducers,
});
