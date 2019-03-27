/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    //【数学】排列组合
    // 2x+y=n

    let middle = n >> 1;
    let x = 0;
    let y = 0;
    let c = 0;

    while (x <= middle) {
        y = n - 2 * x;
        c += combine(x, y + x);
        x++;
    }

    return c;
};
// 组合
function combine(m, n) {
    return factorial(n) / (factorial(m) * factorial(n - m));
}
// 阶乘
function factorial(n) {
    if (n < 2) return 1;

    return n * factorial(n - 1);
}

