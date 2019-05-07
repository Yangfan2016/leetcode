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