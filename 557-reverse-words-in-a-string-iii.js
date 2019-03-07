/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    if (s === "")
        return "";

    let r = ''; // 单词
    let t = ''; // 结果
    for (let i = 0, len = s.length; i < len; i++) {
        if (s[i] === " ") {
            t += r + " "; // 收集一组单词
            r = ''; // 置空
        } else {
            r = s[i] + r; // 收集单词
        }
    }
    return t + r; // t+r 收集剩余单词
};