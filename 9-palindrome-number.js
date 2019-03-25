/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // 与 第 7 题 反转数字 同理
    if (x < 0) return false;

    let res = 0;
    let y = x;
    while (y !== 0) {
        let g = y % 10;
        res = res * 10 + g;
        y = (y - g) / 10 | 0;
    }

    return res === x;

};