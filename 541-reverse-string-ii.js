/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let len = s.length;
    if (len < 2)
        return s;
    if (len < k)
        return reverseAllStr(s);
    if (len < 2 * k)
        return reverseAllStr(s.substr(0, k)) + s.substr(k);

    let last = '';
    let left = '';

    for (var i = 0; i + 2 * k - 1 < len; i = i + 2 * k) { // 4  8  12 
        let str = s.substr(i, 2 * k);
        let l = str.substr(0, k); // 0, 2   4,6
        let r = str.substr(k); // 2      6
        l = reverseAllStr(l);
        left += l + r;
    }

    last = s.substr(i);

    return left + reverseStr(last, k);
};

function reverseAllStr(s) {

    let res = '';
    for (let i = 0, len = s.length; i < len; i++) {
        res = s[i] + res;
    }
    return res;
}