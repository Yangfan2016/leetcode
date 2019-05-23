/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length <= 1) return;

  let k = 0;
  let len = nums.length;
  // 双指针
  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[k]] = [nums[k], nums[i]]; // 与前面的 0 交换位置
      k++; // 并且指针后移
    }
  }
};
