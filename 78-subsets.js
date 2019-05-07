/**
 * 
 *  幂集  
 *  利用二进制，列出所有情况
 *      abc	Subset
 *  0	000	{}
 *  1	001	{c}
 *  2	010	{b}
 *  3	011	{c, b}
 *  4	100	{a}
 *  5	101	{a, c}
 *  6	110	{a, b}
 *  7	111	{a, b, c} 
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    if (nums.length === 0)
        return [[]];
    if (nums.length === 1)
        return [[], nums];
    if (nums.length === 2)
        return [[], nums, [nums[0]], [nums[1]]];

    let len = nums.length;
    let total = 2 ** len; // 所有的子集的情况
    let result = [];

    for (let i = 0; i < total; i++) {
        let group = [];
        for (let j = 0; j < len; j++) {
            // 计算出 i 的二进制 的第 j 位是否为 1（即有值）
            // 即 (i & (1 << j)) > 0
            if (i & 1 << j) {
                group.push(nums[j]); // 存入每一组
            }
        }
        result.push(group);
    }

    return result;
};


// 方法二

/**
 * 
 * ├── [1]                                  
 * │   ├── [1,2]
 * │   │   └── [1,2,3]
 * │   └── [1,3]
 * |
 * ├── [2]
 * |   └── [2,3]
 * ├── [3]
 * 
 * 递归
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets2 = function (nums) {
    if (nums.length === 0)
        return [[]];
    if (nums.length === 1)
        return [[], nums];
    if (nums.length === 2)
        return [[], nums, [nums[0]], [nums[1]]];

    let len = nums.length;
    let result = [];

    (function travel(arr, tmp, i) {
        result.push(tmp); // 存储每一组

        for (; i < len; i++) { // 循环进入下一个分组
            travel(arr, tmp.concat(arr[i]), i + 1); // 将上次的结果 tmp 与本次元素拼接组成新的子集，继续进行同样的操作
        }

    }(nums, [], 0));

    return result;
};