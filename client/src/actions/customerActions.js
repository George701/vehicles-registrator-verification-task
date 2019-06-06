import { GET_CUSTOMERS } from './type';
import axios from 'axios';

export const getCustomers = () => async dispatch => {

    const url = "http://localhost:3001/customers/"; // main


    const res = await axios.get(url);
    dispatch({
        type: GET_CUSTOMERS,
        payload: res.data
    })
};