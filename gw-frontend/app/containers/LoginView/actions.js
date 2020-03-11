export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SET_AUTH = 'SET_AUTH';
export const LOGOUT = 'LOGOUT';

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