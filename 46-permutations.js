/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length === 0) return [[]];
    if (nums.length === 1) return [nums];
    if (nums.length === 2) return [
        [nums[0], nums[1]],
        [nums[1], nums[0]]
    ];

    let res = [];

    // 回溯

    ; (function travel(rest, group) {
        if (rest.length === 0) { // 如果剩余数组没有元素，就将 group 保存的子集填入结果集中
            res.push(group);
            return;
        }

        for (let i = 0; i < rest.length; i++) {
            let brr = rest.slice(0); // 浅拷贝
            brr.splice(i, 1); // 删除当前元素
            travel(brr, group.concat(rest[i])); // 将当前元素和 group 联合组成新的子集
        }

    }(nums, []));

    return res;

};