import { combineReducers } from 'redux';
import customerReducer from './customerReducer';
import vehiclerReducer from './vehicleReducer';

export default combineReducers({
    customers:  customerReducer,
    vehicles:  vehiclerReducer
});