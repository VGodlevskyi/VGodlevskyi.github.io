import api from "../../utils/api.js";
import putToSessionStorage from "../../utils/SessionStorage/putToSessionStorage";
import getFromSessionStorage from "../../utils/SessionStorage/getFromSessionStorage";

export const GET_TOKEN = 'GET_TOKEN'
export const GET_TOKEN_ERROR = 'GET_TOKEN_ERROR'

export const authenticateUserAction = (credentials, onFinish) => dispatch => {
    api.post('/auth/login', credentials, true)
        .then(resp => {
            onFinish()
            const response = resp.data
            if (response.status === 'error') {
                dispatch({ type: GET_TOKEN_ERROR, payload: response.message })
            } else {
                putToSessionStorage('token', response.token)
                dispatch({ type: GET_TOKEN, payload: response.token })
            }
        })
        .catch(err => {
            onFinish()
            console.error(err)
        })
}

export const registerUserAction = (user, onFinish) => dispatch => {
    api.post('/auth/signup', user, true)
        .then(resp => {
            onFinish()
            const response = resp.data
            if (response.status === 'error') {
                dispatch({ type: GET_TOKEN_ERROR, payload: response.message })
            } else {
                putToSessionStorage('token', response.token)
                dispatch({ type: GET_TOKEN, payload: response.token })
            }
        })
        .catch(err => {
            onFinish()
            console.error(err)
        })
}

export const getTokenFromSessionStorageAction = () => dispatch => {
    const token = getFromSessionStorage('token', '')
    dispatch({ type: GET_TOKEN, payload: token })
}