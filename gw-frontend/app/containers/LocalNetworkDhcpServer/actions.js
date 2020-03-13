import {
    SET_SOMETING
} from './constants';

export function setSomething(someting) {
    return {
        type: SET_SOMETING,
        someting
    }
}