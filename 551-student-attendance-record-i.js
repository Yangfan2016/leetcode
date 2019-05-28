/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  // A<=1 &&  连续的 L <=2
  // [1,2,4,5,6,7,9]

  let map = {
    A: 0,
    L: 0,
  };
  let len = s.length;

  for (let i = 0; i < len; i++) {
    let c = s[i];
    // 如果 A > 1 不满足奖赏条件
    if (c === 'A' && ++map[c] > 1) return false;
    if (c === 'L') {
      //  如果 连续的 L > 2 不满足奖赏条件
      if (++map[c] > 2) return false;
    } else {
      // 其他情况，重置计数器
      map['L'] = 0;
    }

  }

  return true;

};
