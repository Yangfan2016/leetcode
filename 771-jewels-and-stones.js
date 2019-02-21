
function countStr(str, char) {
    let n = 0;
    let newStr = str;
    let start = -1;

    while (true) {
        start = newStr.indexOf(char);
        if (start === -1) {
            return n;
        }

        n++;
        newStr = newStr.slice(start + 1);
    }
    return n;
}
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let subStrList = J.split("");
    let count = 0;

    subStrList.forEach(char=>{
        if (S.includes(char)) {
            count+=countStr(S,char);
        }
    }
    );
    return count;
};
