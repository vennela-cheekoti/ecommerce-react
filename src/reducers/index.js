import {combineReducers} from "redux";
import productsReducers from "./productsReducers.js";
import usersReducers from './usersReducers.js'

const rootReducer = combineReducers({
	productListDetails: productsReducers,
	userListDetails: usersReducers
});

export default rootReducer;