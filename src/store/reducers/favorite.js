import {initialState } from "/..index";
import {ADD_FAV} from "../actions";


 

const favreducer = (state= initialState.data, action) => {
    switch(action.type) {



  
        case 'ADD_FAV': 
        return{
            ...state,
            stock: action.payload,
        }
           defaul:
           return state
          
            }
           
        
    
}    

  export default favreducer 