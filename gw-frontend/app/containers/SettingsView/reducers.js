import {
  GET_SETTINGS,
  GET_SETTINGS_SUCCESS,
  GET_SETTINGS_ERROR,
  SET_PASSWORD,
  SET_PASSWORD_SUCCESS,
  SET_PASSWORD_ERROR,
} from './constants';

const initialState = {
  user: '',
  loading: false,
};

function SettingsViewReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SETTINGS:
      return { ...state, loading: true };
    case GET_SETTINGS_SUCCESS:
      return { user: action.user, loading: false };
    case GET_SETTINGS_ERROR:
      return { ...state, loading: false };
    case SET_PASSWORD:
      return { ...state, loading: true };
    case SET_PASSWORD_SUCCESS:
      return { ...state, loading: false };
    case SET_PASSWORD_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export default SettingsViewReducer;
