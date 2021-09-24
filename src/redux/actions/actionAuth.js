import { IS_LOGIN } from "../reducers/constants";

const isLogin = (username, password) => {
    return {
        type: IS_LOGIN,
        username: username,
        password: password
    }
}

export default isLogin