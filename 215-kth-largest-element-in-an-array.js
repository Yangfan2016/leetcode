/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    // 排序  降序

    if (nums.length === 1) return nums[0];
    // 归并排序
    return merge(nums)[k - 1];
};


function merge(nums) {
    let len = nums.length;

    if (len < 2) return nums;

    let middle = len >> 1;
    let left = nums.slice(0, middle);
    let right = nums.slice(middle);

    return sort(merge(left), merge(right));
}

function sort(l, r) {
    let res = [];
    while (l.length > 0 && r.length > 0) {
        if (l[0] > r[0]) {
            res.push(l.shift());
        } else {
            res.push(r.shift());
        }
    }

    if (l.length > 0) res = res.concat(l);
    if (r.length > 0) res = res.concat(r);

    return res;
}
