import { GET_VEHICLES } from "../actions/type";

const initialState = {

};

export default function(state = initialState, action){
    switch(action.type){
        case GET_VEHICLES:
            return{
                ...state,
                vehicles: action.payload
            };
        default:
            return state;
    }
}