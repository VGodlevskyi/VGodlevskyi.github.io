import { GET_TOKEN, GET_TOKEN_ERROR } from "../actions/authActions";

export const authReducer = (auth = {}, action) => {
    switch (action.type) {
        case GET_TOKEN:
            return { token: action.payload }
        case GET_TOKEN_ERROR:
            return { message: action.payload }
        default:
            return auth
    }
}