import {
    SET_SOMETING
} from './constants';
  
  const initialState = {
    someting: ''
};

function LocalDhcpServerReducer(state = initialState, action) {
    switch(action.type) {
        case SET_SOMETING:
            return {...state, someting: action.someting};
        default:
            return state;
    }
}

export default LocalDhcpServerReducer;