import { GET_CUSTOMERS } from "../actions/type";

const initialState = {

};

export default function(state = initialState, action){
    switch(action.type){
        case GET_CUSTOMERS:
            return{
                ...state,
                customers: action.payload
            };
        default:
            return state;
    }
}