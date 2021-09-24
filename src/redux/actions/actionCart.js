import { ADD_TO_CART, RESET_CART, } from "../reducers/constants";

export const addToCart = id => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}

export const resetCart = () => {
    return {
        type: RESET_CART
    }
}

