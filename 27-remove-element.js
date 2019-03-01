/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    if (nums.length === 0) return 0;
    let c = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[c] = nums[i];
            c++;
        }
    }
    return c;
};