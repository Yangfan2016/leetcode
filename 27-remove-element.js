/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length===0) return 0;
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i];
        if (item === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};