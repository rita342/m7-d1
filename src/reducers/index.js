import { ADD_FAV_COMPANY } from '../actions'
import { initialState} from '../store'
export default function mainReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_FAV_COMPANY: {
            return{
                ...state,
                favorites: [...state.favorites.jobs, action.payload]
                    }
                }
            }
        }
    
