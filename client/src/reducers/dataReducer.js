import { GET_DATA } from "../actions/type";

const initialState = {

};

export default function(state = initialState, action){
    switch(action.type){
        case GET_DATA:
            return{
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}