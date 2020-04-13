import LoginReducer from '../reducers';
import { logout, loginSuccess, setSuccess, setError, dismiss } from '../actions';

describe('LoginReducer', () => {
  it('returns the initial state', () => {
    expect(LoginReducer(undefined, {})).toEqual({
      loggedIn: false,
      success: false,
      error: false,
    });
  });
  it('toggels the login successful', () => {
    expect(LoginReducer({}, loginSuccess())).toEqual({
      loggedIn: true,
      success: false,
      error: false,
    });
  });
  it('toggels the logout', () => {
    expect(LoginReducer({}, logout())).toEqual({
      loggedIn: false,
      success: false,
      error: false,
    });
  });
  it('toggels the set success', () => {
    expect(LoginReducer({}, setSuccess())).toEqual({
      loggedIn: false,
      success: true,
      error: false,
    });
  });
  it('toggels the set error', () => {
    expect(LoginReducer({}, setError())).toEqual({
      loggedIn: false,
      success: false,
      error: true,
    });
  });
  it('toggels the dismiss', () => {
    expect(LoginReducer({}, dismiss())).toEqual({
      loggedIn: false,
      success: false,
      error: false,
    });
  });
});
