/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    if (n === 0) return [];
    if (n === 1) return [[n]];
    if (n === 2) return [[1, 2], [4, 3]];

    let arr = new Array(n).fill(0);

    arr = arr.map(item => new Array(n).fill(0));

    let num = 1;
    let line = 0;

    while (n > 0) {
        if (line === n - 1) { // 行和列相等时，即填充的是最后一个元素
            arr[line][line] = num;
            return arr;
        }
        // 填入第一行
        for (let i = line; i < n; i++) {
            arr[line][i] = num++;
        }
        // 填入右侧
        for (let i = line + 1; i < n - 1; i++) {
            arr[i][n - 1] = num++;
        }
        // 填入尾行
        for (let i = n - 1; i >= line; i--) {
            arr[n - 1][i] = num++;
        }
        // 填入左侧
        for (let i = n - 2; i > line; i--) {
            arr[i][line] = num++;
        }
        n--; // 填充完一圈，递减一次 
        line++; // 下移一行
    }
    return arr;
};
