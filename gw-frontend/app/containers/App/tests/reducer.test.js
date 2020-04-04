import LoginReducer from '../reducers';
import { login, logout, loginSuccess } from '../actions';

describe('LoginReducer', () => {
  it('returns the initial state', () => {
    expect(LoginReducer(undefined, {})).toEqual({
      loggedIn: false,
    });
  });
});
