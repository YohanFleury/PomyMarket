import { IS_LOGIN } from "./constants";
import accounts from '../../datas/fakeAccounts'


const initialState = [
    {
        login : false,
        userName: '',
        error: ''
    }
]

const helperIsLogin = (state, username, password) => {

    accounts.map(e => {
        if(e.username === username  &&  e.password === password) {
            state[0].login = true
            state[0].userName = username
            state[0].error = " "
        } else {
            return state[0].error = "Identifiant ou mot de passe incorrect."
        }
    })
    return state
}

export const reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOGIN: 
            state = helperIsLogin(state, action.username, action.password)
            return state
        default:
            return state
    }
}