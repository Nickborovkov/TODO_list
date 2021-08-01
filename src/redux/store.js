import {combineReducers, createStore} from "redux";
import todoReducer from "./todoReducer";
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
    todo: todoReducer,
    form: formReducer,
})


const store = createStore(reducers)

export default store

window.store = store