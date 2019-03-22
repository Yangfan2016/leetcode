/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let len = nums.length;
    let map = {}; // 结构 {b:a 的索引}   target===a+b
 
    for (let i = 0; i < len; i++) {
        let rest = target - nums[i]; // 7=9-2
        if (map[nums[i]] > -1) {   // map[7]=0
            return [map[nums[i]], i]   // [0,7的索引]
        }
        map[rest] = i; // map[7]=0
    }

    return [];
};