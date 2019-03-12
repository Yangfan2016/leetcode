/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0)
        return "";
    if (strs.length === 1)
        return strs[0];

    // 先找到最小长度的字符串
    let minStr = strs[0];
    for (let i = 0, len = strs.length; i < len; i++) {
        if (strs[i].length < minStr.length) {
            minStr = strs[i];
        }
    }
    let res = '';

    for (let i = minStr.length; i > 0; i--) { // 每次都缩小一位
        let isEqual = true;
        minStr = minStr.substr(0, i);

        for (let j = 0, len = strs.length; j < len; j++) { // 逐个与数组的元素的相同位数比较
            if (strs[j].substr(0, i) !== minStr) {
                isEqual = false;
                break;
            }
        }

        if (isEqual) {
            res = minStr;
            break;
        }
    }

    return res;

};