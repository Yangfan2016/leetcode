/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let m = matrix.length;
    // 空数组
    if (m === 0) return [];

    let n = matrix[0].length;
    // 子数组为空数组
    if (n === 0) return [];

    let i = 0;
    let j = 0;
    let res = [];
    let list = matrix.slice(0); // 拷贝副本

    let placeholerMap = new Array(m).fill(0); // 占位标记数组

    placeholerMap = placeholerMap.map(() => new Array(n).fill(false));

    while (res.length < m * n) { // 记录的个数应等于 m*n 个
        // right  向右走
        for (; j < n; j++) {
            if (placeholerMap[i][j]) break;
            res.push(list[i][j]);
            placeholerMap[i][j] = true;
        }
        j--; // 消除 for 循环 多算一次计数器的影响
        i++; // 向下移一位
        // down  向下走
        for (; i < m; i++) {
            if (placeholerMap[i][j]) break;
            res.push(list[i][j]);
            placeholerMap[i][j] = true;
        }
        i--; // 消除 for 循环 多算一次计数器的影响
        j--; // 向左移一位
        // left  向左走
        for (; j >= 0; j--) {
            if (placeholerMap[i][j]) break;
            res.push(list[i][j]);
            placeholerMap[i][j] = true;
        }
        j++; // 消除 for 循环 多算一次计数器的影响
        i--; // 向上移一位
        // up  向上走
        for (; i >= 0; i--) {
            if (placeholerMap[i][j]) break;
            res.push(list[i][j]);
            placeholerMap[i][j] = true;
        }
        i++; // 消除 for 循环 多算一次计数器的影响
        j++; // 向右移一位
    }

    return res;

};


// 方法2 递归
var spiralOrder2 = function (matrix) {
    let m = matrix.length;
    // 空数组
    if (m === 0) return [];

    let n = matrix[0].length;
    // 子数组为空数组
    if (n === 0) return [];

    return function traverse(arr, res) {

        // 存入首行
        if (arr.length > 0) res = res.concat(arr.shift());
        // 存入右侧
        if (arr.length > 0) {
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i].length === 0) continue;
                res.push(arr[i].pop()); // 把中间的每行的最后一个元素存入
            }
        }
        // 存入尾行
        if (arr.length > 0) res = res.concat(arr.pop().reverse());
        // 存入左侧
        if (arr.length > 0) {
            for (let i = arr.length - 1; i >= 0; i--) {
                if (arr[i].length === 0) continue;
                res.push(arr[i].shift()); // 把中间的每行的第一个元素存入
            }
        }
        // 下一次循环
        if (arr.length > 0) return traverse(arr, res);

        return res;
    }(matrix.slice(0), []);
};

