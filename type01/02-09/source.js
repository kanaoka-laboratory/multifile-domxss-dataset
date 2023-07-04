/*
* Return the value of the first cookie with the given name.
*/
function lookupCookie(name) {
    var parts = document.cookie.split(/\s*;\s*/);
    var nameEq = name + '=';
    for (var i = 0; i < parts.length; i++) {
        if (parts[i].indexOf(nameEq) == 0) {
            return parts[i].substr(nameEq.length);
        }
    }
}

// Pre-seed the cookie, if it has not been set yet.
if (!lookupCookie('badValue')) {
    document.cookie = 'badValue="a"';
}

var payload = lookupCookie('badValue');

export { payload };