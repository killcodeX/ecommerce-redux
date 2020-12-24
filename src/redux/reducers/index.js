import {combineReducers} from 'redux';
import ProductReducer from './reducer';
import AuthReducer from './authReducer';



export default combineReducers({
    Products: ProductReducer,
    Auth: AuthReducer
})