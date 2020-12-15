import {
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  SET_CREDENTIALS_SUCCESS,
  SET_CREDENTIALS_ERROR,
  UPDATE_USERNAME,
} from './constants';

const initialState = {
  user: '',
  loading: false,
};

function SettingsViewReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return { user: action.username, loading: false };
    case GET_USER_ERROR:
      return { ...state, loading: false };
    case UPDATE_USERNAME:
      return { ...state, user: action.username };
    case SET_CREDENTIALS_SUCCESS:
      return { ...state, loading: false };
    case SET_CREDENTIALS_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export default SettingsViewReducer;
