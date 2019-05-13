/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let len = word.length;
    if (len === 1)
        return true;

    let c = 0;

    for (let i = 0; i < len; i++) {
        let char = word[i];
        let code = char.charCodeAt(0);
        // 大写字母的数量如果比 当前的索引还小，说明大写字母不连续 e.g. "AaA"
        if (code < 97 && c++ < i) return false;
    }

    return c === len || c <= 1;

};