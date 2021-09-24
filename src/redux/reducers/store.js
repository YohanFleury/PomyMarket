import { createStore, combineReducers } from "redux";
import { reducerCart } from "./reducerCart";
import { reducerAuth } from "./reducerAuth";


const rootReducer = combineReducers({cart: reducerCart, auth: reducerAuth})
const store = createStore(rootReducer)

export default store

console.log(store.getState())