function sum(...arr) {
    return arr.reduce((a, c) => a + c);
}

function isEmpty(value) {
    return value === null || value === undefined || value === '' || value === {} || value === [] || value.length === 0;
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
    isEmpty,
    isMobile,
    sum,
    parseCookie
}