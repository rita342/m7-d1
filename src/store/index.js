import { createStore} from 'redux'
import mainReducer from '../reducers'

export const initiltate = {
    favorites:{
            jobs: [],
    },
}
const configureStore = createStore(
    mainReducer,
initialState
,
     window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION__()

)
export default configureStore