import { ADD_TO_CART, RESET_CART } from "./constants";
import items from '../../datas/fakeDatas'

const initialState = []

const helperAddToCart = (state, id) => {
    const index = items.findIndex(item => item.id === id)
    const item = items[index]
    const newState = [...state]
    newState.find(e => e.id === item.id ? e.quantity += 1 : '') 
    newState.push(item)
    return newState
}



export const reducerCart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: 
            state = helperAddToCart(state, action.payload)
            return state
        
        case RESET_CART:
            state = []
            return state
            
        default:
            return state
    }
}