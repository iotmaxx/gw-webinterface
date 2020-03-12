import {
    LOGOUT,
    LOGIN_SUCCESS,
    ACCESS_TOKEN,
    REFRESH_TOKEN
} from './constants';
  
  const initialState = {
    loggedIn: false
};

function LoginReducer(state = initialState, action) {
    switch(action.type) {
        case LOGOUT:
            localStorage.removeItem(ACCESS_TOKEN);
            localStorage.removeItem(REFRESH_TOKEN);
            return {...state, loggedIn: false};
        case LOGIN_SUCCESS:
            return {...state, loggedIn: true};
        default:
            return state;
    }
}

export default LoginReducer;