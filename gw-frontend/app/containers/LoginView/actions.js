import {
    LOGIN,
    LOGOUT,
    SET_AUTH
} from './constants';

export function login(username, password) {
    return {
        type: LOGIN,
        username,
        password
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}

export function setAuth(auth) {
    return {
        type: SET_AUTH,
        auth
    }
}