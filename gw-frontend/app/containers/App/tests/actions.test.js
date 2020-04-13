import { logout, loginSuccess, login, setSuccess, setError, dismiss } from '../actions';
import { LOGIN, LOGIN_SUCCESS, LOGOUT, SET_SUCCESS, SET_ERROR, DISMISS } from '../constants';

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
  it('toggels the set success', () => {
    expect(setSuccess()).toEqual({
      type: SET_SUCCESS,
    });
  });
  it('toggels the logout', () => {
    expect(setError()).toEqual({
      type: SET_ERROR,
    });
  });
  it('toggels the logout', () => {
    expect(dismiss()).toEqual({
      type: DISMISS,
    });
  });
});
