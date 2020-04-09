import {
  LOGOUT,
  LOGIN_SUCCESS,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  SET_ERROR,
  SET_SUCCESS,
  DISMISS,
} from './constants';

const initialState = {
  loggedIn: false,
  success: false,
  error: false,
};

function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
      return { ...state, loggedIn: false };
    case LOGIN_SUCCESS:
      return { ...state, loggedIn: true };
    case SET_SUCCESS:
      return { ...state, success: true, error: false };
    case SET_ERROR:
      return { ...state, success: false, error: true };
    case DISMISS:
      return { ...state, success: false, error: false };
    default:
      return state;
  }
}

export default LoginReducer;
