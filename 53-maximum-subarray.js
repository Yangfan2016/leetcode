/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 1) return nums[0]; // 极端条件

    let res = nums[0];
    let sum = 0;

    for (let i = 0, len = nums.length; i < len; i++) {
        if (sum > 0) { // 和为正数，才能保证最大
            sum += nums[i];
        } else { // 否则，重新开始计算
            sum = nums[i];
        }

        if (sum > res) { // 更新最大值
            res = sum;
        }
    }

    return res;
};