/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    let len = words.length;
    if (len < 2)
        return len;

    var listMap = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

    var res = new Set;

    for (let i = 0; i < len; i++) {
        let str = words[i];
        let len2 = str.length;
        let word = "";

        for (let j = 0; j < len2; j++) {
            let c = str[j];
            let index = c.charCodeAt(0) - 97;
            word += listMap[index];
        }
        res.add(word);
    }

    return res.size;
};