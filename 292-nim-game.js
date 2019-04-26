/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
    // bash game 巴什博奕
    if (n < 4) return true;
    return n % 4 !== 0;
};