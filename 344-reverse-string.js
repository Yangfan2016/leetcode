/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    for (let len = s.length, i = 0; i < len; i++) {
        let r = len - 1 - i;

        if (i < r) {
            s[i] = [s[r], s[r] = s[i]][0];
        }
    }

};