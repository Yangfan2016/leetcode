/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // 摩尔投票法
    let c = 0;
    let res;
    for (let i = 0, len = nums.length; i < len; i++) {
        if (c === 0) { // 重新计数
            res = nums[i];
        }
        res === nums[i] ? c++ : c--  // 相同 累加， 不同 递减
    }
    return res;
};