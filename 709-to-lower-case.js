/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
    if (str.trim() === "")
        return str;

    // 生成字母字典
    let map = {};

    let code = 65;
    let index = 0;

    while (index < 26) {
        let codeSmall = code + 32;
        map[String.fromCharCode(code)] = String.fromCharCode(codeSmall);
        code++;
        index++;
    }

    let len = str.length;
    let arr = [];

    for (let i = 0; i < len; i++) {
        let c = str[i];
        arr[i] = map[c] || c;
    }
    return arr.join("");
};