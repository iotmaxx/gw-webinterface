import { call, put } from 'redux-saga/effects';
import { API_URL, ACCESS_TOKEN } from '../../App/constants';
import { getSystemInfo } from '../saga';
import { receivedSystemInfo } from '../actions';
import request from 'utils/request';

test('getSystemInfo saga test', () => {
  const requestURL = `${API_URL}system/info`;
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const getSystemInfoSaga = getSystemInfo();
  let result;

  result = getSystemInfoSaga.next();
  expect(result.value).toEqual(call(request, requestURL, options));
  result = getSystemInfoSaga.next();
  expect(result.value).toEqual(put(receivedSystemInfo()));
});
