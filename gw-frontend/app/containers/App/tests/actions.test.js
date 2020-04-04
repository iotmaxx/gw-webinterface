import { logout, loginSuccess, login } from '../actions';
import { LOGIN, LOGIN_SUCCESS, LOGOUT } from '../constants';

describe('LoginReducer', () => {
  it('returns the login constant', () => {
    expect(login()).toEqual({
      type: LOGIN,
    });
  });
  it('toggels the login successful', () => {
    expect(loginSuccess()).toEqual({
      type: LOGIN_SUCCESS,
    });
  });
  it('toggels the logout', () => {
    expect(logout()).toEqual({
      type: LOGOUT,
    });
  });
});
