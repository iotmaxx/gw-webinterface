import SystemInfoReducer from '../reducers';
import { receivedSystemInfo } from '../actions';

describe('SystemInfoReducer', () => {
  it('returns the initial state', () => {
    const initialState = {
      systemInfo: [],
    };
    expect(SystemInfoReducer(undefined, {})).toEqual(initialState);
  });
  it('returns the latest system information', () => {
    const systemInfo = [
      { latestInfoA: 'all good' },
      { latestInfoB: 'excelent' },
    ];
    expect(SystemInfoReducer({}, receivedSystemInfo(systemInfo))).toEqual({
      systemInfo,
    });
  });
});
