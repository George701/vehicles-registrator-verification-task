import { GET_CUSTOMERS } from "../actions/type";

const initialState = {
    customers: []
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_CUSTOMERS:
            return{
                ...state,
                customer: action.payload
            };
        default:
            return state;
    }
}