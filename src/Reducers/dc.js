import { ACTION_TYPES } from "../Actions/dc";
const initialState = {
    list : []
}

export const dc = (state = initialState ,action) => {
    switch(action.type){
        case ACTION_TYPES.FETCH_ALL:
            return{
                ...state,
                list: [...action.payload]
            }
        default: 
        return state
    }
}