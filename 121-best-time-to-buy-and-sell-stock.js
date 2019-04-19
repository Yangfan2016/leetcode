/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let len = prices.length;

    if (len < 2)
        return 0;
    if (len === 2) {
        profit = prices[1] - prices[0];
        return profit > 0 ? profit : 0;
    }

    for (let i = 0; i < len; i++) {
        let item = prices[i];
        // 存取最小值，作为买入
        if (item < min) {
            min = item;
            continue;
        }
        // 计算利润
        let profit = item - min;
        // 存入最大利润
        if (profit > max) {
            max = profit;
        }
    }

    return max;

};