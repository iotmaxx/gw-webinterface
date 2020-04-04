import { getSystemInfo, receivedSystemInfo } from '../actions';
import { GET_SYSTEM_INFO, RECEIVED_SYSTEM_INFO } from '../constants';

describe('Actions of SystemInfoReducer', () => {
  it('returns GET_SYSTEM_INFO', () => {
    expect(getSystemInfo()).toEqual({
      type: GET_SYSTEM_INFO,
    });
  });
  it('returns RECEIVED_SYSTEM_INFO', () => {
    const systemInfo = [
      { latestInfoA: 'all good' },
      { latestInfoB: 'excelent' },
    ];
    expect(receivedSystemInfo(systemInfo)).toEqual({
      type: RECEIVED_SYSTEM_INFO,
      systemInfo,
    });
  });
});
