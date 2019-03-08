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
    let n = 1;

    for (let i = 0, len = s.length; i < len; i++) {
        if (i === n * 2 * k - 1) {
            last += s[i];
            // 没 2*n*k 收集一组
            let r = reverseAllStr(last.substr(0, k)) + last.substr(k);
            left += r;
            // 进行翻转操作
            last = '';
            // 清空收集器
            n++;
            // 加倍 2k->4k，进行下一组
        } else {
            last += s[i];
            // 收集剩余字符串
        }
    }

    return left + reverseStr(last, k);
};

function reverseAllStr(s) {
    let res = '';
    for (let i = 0, len = s.length; i < len; i++) {
        res = s[i] + res;
    }
    return res;
}