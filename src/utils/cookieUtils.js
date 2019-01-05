export function saveCookie(data) {
    let cookieString = "token=" + data;
    document.cookie = cookieString;
}

export function getCookieToken() {
    let c = document.cookie.split(";")[1];
    if(c !== undefined) {
        let token = c.split("=")[1];
        return token;
    }
}
export function deleteCookie(name) {
    document.cookie = 
    [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=.', 
    window.location.host.toString()].join('');
}