/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let MAX = 2147483647;
    let MIN = -2147483648;

    if (x > MAX || x < MIN) return 0;

    let res = 0;


    while (x !== 0) {
        let g = x % 10; //个位
        res = res * 10 + g;
        x = (x - g) / 10 | 0;
    }

    if (res > MAX || res < MIN) return 0;
    return res;
};