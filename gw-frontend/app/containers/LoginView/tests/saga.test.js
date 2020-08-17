import { call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { API_URL } from '../../App/constants';
import { login } from '../saga';
import { loginSuccess } from '../../App/actions';

test('login saga test', () => {
  const credentials = {
    username: 'user',
    password: 'pass',
  };
  const requestURL = `${API_URL}auth/login`;
  const options = {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const tokenPair = {
    access: 'asd',
    refresh: 'asdasd',
  };
  const loginSaga = login(credentials);
  let result;

  result = loginSaga.next();
  expect(result.value).toEqual(call(request, requestURL, options));
  result = loginSaga.next(tokenPair);
  expect(result.value).toEqual(put(loginSuccess()));
});
