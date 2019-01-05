import { getCookieToken } from './cookieUtils';
export function createHeader() {
    return {
        authorization : getCookieToken()
    }
}