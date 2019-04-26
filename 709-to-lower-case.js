/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
    let dis = 32; // 97-65
    let start = 65;
    let end = 90;
    let list = str.split("");
    return list.reduce((prev, char) => {
        let code = char.charCodeAt(0);
        if (start <= code && code <= end) {
            code += dis;
        }
        return prev + String.fromCharCode(code);
    }, "");
};
