/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n<=0) return false;
    if (n===1) return true;
    if (n%2!==0) return false;
    // 二进制下的 2 的次幂 都是 1000 这种（1 后面全是 0）
    // 利用 与 运算，只有 1 才是 1，否则是 0
    // 011  3
    // 100  4
    // 000
    return (n&(n-1))===0;
};