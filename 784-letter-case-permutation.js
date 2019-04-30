/**
 * @param {string} S
 * @return {string[]}
 * 
 */
var letterCasePermutation = function (S) {
    if (!S)
        return [""];

    let res = [];

    function isNumber(n) {
        return n === +n;
    }

    /**
     * 
     * @param {string} undo  保存未处理的剩余的字符
     * @param {string} done 保存已处理的字符
     */
    function recall(undo, done = '') {
        let first = undo[0];

        if (undo.length === 1) { // 如果只剩下一个字符，那么就存入结果集中
            if (isNumber(+first)) { // 如果是数字的话，不作处理
                res.push(done + first);
            } else { // 字母的话，分别存入小写和大写的结果
                res.push(done + first.toLowerCase());
                res.push(done + first.toUpperCase());
            }
        } else {
            if (isNumber(+first)) { // 如果是数字的话，不作处理
                recall(undo.slice(1), done + first);
            } else { // 字母的话，分别存入小写和大写的结果
                recall(undo.slice(1), done + first.toLowerCase());
                recall(undo.slice(1), done + first.toUpperCase());
            }
        }
    }

    recall(S);

    return res;

};

