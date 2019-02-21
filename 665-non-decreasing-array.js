/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    let list = nums.map((num, index) => {
        let next = nums[index + 1] || num;
        return next - num;
    });
    let negativeList = list.filter(item => item < 0);
    let len = negativeList.length;
    // 没有负数
    if (len === 0) return true;
    // 大于1个负数
    if (len > 1) return false;
    // 只有一个负数
    if (len === 1) {
        let indexOfNegative = list.findIndex(item => item < 0);
        if (indexOfNegative === 0) { // 是否是第一个元素
            return true;
        } else {
            let prev = nums[indexOfNegative - 1];
            let next = nums[indexOfNegative + 1];
            if (prev > next) {
                return false;
            }
        }
    }

    return true;
};


// example

var input = [1, 4, 3, 3]; // [4,2,1]

console.log(checkPossibility(input));
