/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    // 48-57

    let s = str.trim();

    if (s === "") return 0;
    if (s.length === 1 && isNaN(+s)) return 0;

    let flag = ['+', '-'];
    let signal = s[0];
    let n = s;
    let MAX = 2 ** 31 - 1;
    let MIN = -(2 ** 31);

    // 有符号
    if (flag.includes(signal)) {
        n = s.substr(1);
    } else {
        signal = '';
    }

    // 取数字
    let num = '';
    for (let i = 0, len = n.length; i < len; i++) {
        let c = n[i];
        if (c.charCodeAt(0) >= 48 && c <= 57) {
            num += c;
        } else {
            break;
        }
    }

    num = +(signal + num);

    if (num > MAX) return MAX;
    if (num < MIN) return MIN;

    return isNaN(num) ? 0 : num;

};
