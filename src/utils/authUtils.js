function saveTokenToCookie (data) {
    let cookieString = "token=" + data;
    document.cookie = cookieString;
}

function getCookieToken() {
    let key = document.cookie.split("=")[0];
    if(key === 'token'){
        let token = document.cookie.split("=")[1]
        return token;
    }
    return undefined;
}

function deleteCookie(name) {
    document.cookie = 
    [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=.', 
    window.location.host.toString()].join('');
}


/** required modules */
exports.saveTokenToCookie = saveTokenToCookie;
exports.getCookieToken = getCookieToken;
exports.deleteCookie = deleteCookie;