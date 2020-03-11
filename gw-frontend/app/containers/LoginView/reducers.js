import {
    SET_AUTH,
    LOGOUT,
    LOGIN
  } from './actions';
  
  const initialState = {
    loggedIn: false,
    token: ''
};

function LoginReducer(state = initialState, action) {
    switch(action.type) {
        case LOGOUT:
            return {...state, loggedIn: false, token: ''};
        case SET_AUTH:
            return {...state, loggedIn: true, token: action.auth};
        default:
            return state;
    }
}

export default LoginReducer;