import { GET_VEHICLES } from "../actions/type";

const initialState = {

};

export default function(state = initialState, action){
    switch(action.type){
        case GET_VEHICLES:

            const result = action.payload.reduce((map, obj) => {
                map[obj.vehicleID] = obj;
                return map
            }, {})

            return{
                ...state,
                ...result
            };
        default:
            return state;
    }
}