import { combineReducers } from "redux";
import countReducer from "./countReducer";
import crudReducer from "./crudReducer";
import apiReducer from "./apiReducer";

export const rootReducer = combineReducers({
    countData: countReducer,
    crud: crudReducer,
    apicrud: apiReducer,
})