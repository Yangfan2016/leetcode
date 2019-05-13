/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {

    if (S.length === 1)
        return S + 'maa';

    let map = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1,
    };


    let strs = S.split(" ");
    let res = [];

    for (let i = 0, len = strs.length; i < len; i++) {
        let word = strs[i];
        let first = word[0];
        word = (map[first.toLowerCase()] ? word + "ma" : word.substring(1) + first + "ma") + "".padEnd(i + 1, "a");

        res.push(word);
    }

    return res.join(" ");

};
