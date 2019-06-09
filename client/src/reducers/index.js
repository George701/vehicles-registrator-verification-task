import { combineReducers } from 'redux';
import customerReducer from './customerReducer';
import vehiclerReducer from './vehicleReducer';
import dataReducer from './dataReducer';

export default combineReducers({
    customers:  customerReducer,
    vehicles:  vehiclerReducer,
    data: dataReducer
});