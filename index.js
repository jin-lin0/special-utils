function sum(...arr) {
    return arr.reduce((a, c) => a + c, 0);
}

function isMobile(mobile) {
    return /^1[3-9]\d{9}$/.test(mobile);
}

function parseCookie(cookieStr) {
    return cookieStr.split(";").map(v => v.split('=')).reduce((acc, v) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
    }, {})
}

export {
    isMobile,
    sum,
    parseCookie
}