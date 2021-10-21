import {initialState } from "/..actions"
const initialState = {
    favorite: []
}

export default function mainReducer(state = initialState, action) {

    console.log(action, state)

    const { type, payload } = action

    switch(type) {
        case 'Get_JOBS': 
            return {
                ...state,
              stock: [...state.stock, payload]
            }
            case 'ADD_FAV': 
            return {
                ...state,
               stock: [...state.stock, payload]
            }
            case 'REM_FAV': 
            return {
                ...state,
                stock: [...state.stock, payload]
            }
         
            

        default: 
            return state
    }

}