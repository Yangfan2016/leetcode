/**
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


    // 幂集  
    // 利用二进制，列出所有情况
    //      abc	Subset
    // 0	000	{}
    // 1	001	{c}
    // 2	010	{b}
    // 3	011	{c, b}
    // 4	100	{a}
    // 5	101	{a, c}
    // 6	110	{a, b}
    // 7	111	{a, b, c}    

    // 转换为二进制
    function d2bin(n) {
        return n.toString(2);
    }
    // 根据二进制的位置填充子集
    function fill(arr, map) {
        let res = [];

        for (let i = 0, len = arr.length; i < len; i++) {
            if (map[i] === "1") {
                res.push(arr[i]);
            }
        }

        return res;
    }

    let len = nums.length;
    let total = 2 ** len; // 所有情况的总数
    let result = [];

    for (let i = 0; i < total; i++) {
        let bin = d2bin(i).padStart(len, "0");
        result.push(fill(nums, bin));
    }

    return result;
};