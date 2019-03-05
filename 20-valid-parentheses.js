/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s === '') return true;

    let stack = [];

    let map = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (let i = 0, len = s.length; i < len; i++) {
        let item = s[i];
        let pairs = map[item] || '';

        if (pairs === stack[0]) {
            stack.shift();
        } else {
            stack.unshift(item);
        }
    }
    return stack.length === 0;

};