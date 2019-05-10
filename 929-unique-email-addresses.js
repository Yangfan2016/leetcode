/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    let len = emails.length;
    let s = new Set;

    for (let i = 0; i < len; i++) {
        let em = emails[i];
        let len2 = em.length;
        let at = -1;
        let str = "";
        let after = "";
        let before = "";

        // 找到 "@" 符号位置
        for (let j = 0; j < len2; j++) {
            let char = em[j];

            if (char === "@") {
                at = j;
                break;
            }
        }

        after = em.substring(at);

        // 去除 "@" 符号之前（如果遇到 "+"，则退出）的 "." 符号
        for (let j = 0; j < at; j++) {
            let char = em[j];
            if (char === ".") {
                continue;
            }
            if (char === "+") {
                break;
            }
            before += char;
        }

        str = before + after;
        s.add(str);
    }
    return s.size;

};
