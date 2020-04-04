import LoginReducer from '../reducers';
import { logout, loginSuccess } from '../actions';

describe('LoginReducer', () => {
  it('returns the initial state', () => {
    expect(LoginReducer(undefined, {})).toEqual({
      loggedIn: false,
    });
  });
  it('toggels the login successful', () => {
    expect(LoginReducer({}, loginSuccess())).toEqual({
      loggedIn: true,
    });
  });
  it('toggels the logout', () => {
    expect(LoginReducer({}, logout())).toEqual({
      loggedIn: false,
    });
  });
});
