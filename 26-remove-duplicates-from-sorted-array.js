/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length < 2) return nums.length;
    if (nums.length === 2) {
        return nums[0] === nums[1] ? 1 : 2;
    }

    let c = 0; // 慢指针

    for (let i = 1, len = nums.length; i < len; i++) {
        // i 快指针
        if (nums[i] !== nums[c]) { // 不相等时
            c++; // 慢指针 前进
            nums[c] = nums[i]; // 并且更新慢指针的值
        }
    }
    return c + 1; // 慢指针 指向的是最后一个不等的值，即索引，所以数组的长度等于 c+1
};