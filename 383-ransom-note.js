/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let l1 = ransomNote.length;
  let l2 = magazine.length;

  if (l1 > l2) return false;

  let list = new Array(26).fill(0);

  for (let i = 0; i < l2; i++) {
    let c = magazine[i];
    let code = c.charCodeAt(0);

    list[code - 97]++;
  }

  for (let j = 0; j < l1; j++) {
    let c = ransomNote[j];
    let code = c.charCodeAt(0);

    if (--list[code - 97] < 0) {
      return false;
    }
  }

  return true;

};



