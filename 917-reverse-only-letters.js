/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {

  // 双指针

  let len = S.length;
  // 特殊情况
  if (len < 1) return S;

  let h = 0;
  let r = len - 1;
  let arr = S.split("");
  let pattern = /[a-zA-Z]/;

  while (h < r) { // 头指针小于尾指针
    if (!pattern.test(arr[h])) { // 如果是非字母，头指针向后移动一位
      h++;
      continue; // 跳过本次循环
    }

    if (!pattern.test(arr[r])) { // 如果是非字母，尾指针向前移动一位
      r--;
      continue; // 跳过本次循环
    }

    if (h < r) { // 头指针小于尾指针
      [arr[h], arr[r]] = [arr[r], arr[h]]; // 如果都是字母，进行位置互换
    }
    // 前进一位，进行下次操作
    h++;
    r--;

  }

  return arr.join("");

};
