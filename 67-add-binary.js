/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let dis = a.length - b.length;
  // 补齐前导零
  if (dis > 0) {
    b = b.padStart(a.length, "0");
  } else {
    a = a.padStart(b.length, "0");
  }

  let flag = 0;
  let arr = [];

  for (let i = a.length - 1; i >= 0; i--) {
    let n = +a[i];
    let m = +b[i];

    let s = n + m + flag;

    if (s >= 2) {
      s -= 2;
      arr.unshift(s);
      flag = 1;
    } else {
      arr.unshift(s);
      flag = 0;
    }

  }

  flag !== 0 && arr.unshift(flag);

  return arr.join("")

};
