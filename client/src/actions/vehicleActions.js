import { GET_VEHICLES } from './type';
import axios from 'axios';

export const getVehiclesStatus = (id) => async dispatch => {

    const url = `http://localhost:3001/vehicles?vehicleID=${id}`;
    // console.log(url);


    const res = await axios.get(url);
    dispatch({
        type: GET_VEHICLES,
        payload: res.data
    })
};