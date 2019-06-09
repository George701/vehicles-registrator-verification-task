import { GET_DATA } from './type';
import axios from 'axios';

export const getData = (arr) => async dispatch => {

    console.log(arr);
    const url = "http://localhost:3001/customers/"; // main


    const res = await axios.get(url);
    dispatch({
        type: GET_DATA,
        payload: res.data
    })
};