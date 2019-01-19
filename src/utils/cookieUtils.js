export function saveTokenToCookie(data) {
    let cookieString = "token=" + data;
    document.cookie = cookieString;
}

export function getCookieToken() {
    let key = document.cookie.split("=")[0];
    if(key === 'token'){
        let token = document.cookie.split("=")[1]
        return token;
    }
    return undefined;
}
export function deleteCookie(name) {
    document.cookie = 
    [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=.', 
    window.location.host.toString()].join('');
}