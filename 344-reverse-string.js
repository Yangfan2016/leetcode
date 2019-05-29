/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let len = s.length;
  let m = len >> 1;

  for (let i = 0; i < m; i++) {
    let r = len - 1 - i;

    s[i] = [s[r], s[r] = s[i]][0];
  }

};
