import {
    RECEIVED_SYSTEM_INFO
  } from './constants';
  
  const initialState = {
      systemInfo: []
  };

function SystemInfoReducer(state = initialState, action) {
    switch(action.type) {
        case RECEIVED_SYSTEM_INFO:
            return {...state, systemInfo: action.systemInfo};
        default:
            return state;
    }
}

export default SystemInfoReducer;