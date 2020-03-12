import {
    GET_SYSTEM_INFO,
    RECEIVED_SYSTEM_INFO
} from './constants';

export function getSystemInfo() {
    return {
        type: GET_SYSTEM_INFO
    }
}

export function receivedSystemInfo(systemInfo) {
    return {
        type: RECEIVED_SYSTEM_INFO,
        systemInfo
    }
}