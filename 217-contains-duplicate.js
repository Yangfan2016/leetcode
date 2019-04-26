/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    if (nums.length < 1) {
        return false;
    }

    let map = {};

    for (let i = 0, len = nums.length; i < len; i++) {
        if (map[nums[i]] === void 0) {
            map[nums[i]] = 1;
        } else {
            return true;
        }
    }

    return false;

};