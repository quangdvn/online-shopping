import {combineReducers} from 'redux'
import errorReducer from './errorReducers'
import {setCurrentUser} from './authReducers'


export default combineReducers({errors: errorReducer, auth: setCurrentUser})
