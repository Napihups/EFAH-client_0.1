import { getCookieToken } from './authUtils';
export function createHeader() {
    return {
        authorization : getCookieToken()
    }
}