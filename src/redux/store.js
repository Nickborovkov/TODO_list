import {combineReducers, createStore} from "redux";
import todoReducer from "./todoReducer";

const reducers = combineReducers({
    todo: todoReducer,
})


const store = createStore(reducers)

export default store