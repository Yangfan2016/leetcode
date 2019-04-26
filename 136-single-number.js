/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    if (nums.length < 2) return nums[0];

    // 异或，相同为0，不同为1

    let res = 0;

    for (let i = 0, len = nums.length; i < len; i++) {
        res ^= nums[i]; // 异或运算，就会把相同的元素消为0 ，最后留下  0^a ===a 
    }

    return res;
};