import { applyMiddleware, createStore,combineReducers } from 'redux'
import {homeReducer} from "./reducers";
const store = createStore(combineReducers({homeReducer}))

export default store