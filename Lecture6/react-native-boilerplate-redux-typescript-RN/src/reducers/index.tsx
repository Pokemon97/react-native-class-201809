import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import homeReducer from "../container/HomeContainer/reducer";
import countReducer from "../container/SummaryContainer/reducer";
export default combineReducers({
	form: formReducer,
	homeReducer,countReducer
});
