/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n < 3)
        return 0;
    if (n === 3)
        return 1;

    let flag = [2];

    for (let i = 3; i < n; i += 2) { // 排除了偶数
        let isPrime = false;
        for (let j = 0; j < Math.sqrt(flag.length); j++) { // 与之前的素数进行相除比较
            /** 
             * 让我们写下 12 的所有因子:
             * 2 × 6 = 12 
             * 3 × 4 = 12
             * 4 × 3 = 12
             * 6 × 2 = 12
             * 如你所见，4 × 3 和 6 × 2 是非必须计算
             * 因此，我们只需要考虑到 √n 
             * 因为，如果 n 能被 p 整除，那么满足  n = p × q，并且 p ≤ q，因此我们可以得出 p ≤ √n
             */

            let item = flag[j];
            if (i > item) { // 大于目标素数才进行比较
                if (i % item === 0) {  // 非素数，直接跳出内循环，不在判断
                    isPrime = false;
                    break;
                } else {
                    isPrime = true;
                }
            }
        }
        if (isPrime) { // 将素数填入数组
            flag.push(i);
        }
    }
    return flag.length;
};

