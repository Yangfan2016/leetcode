/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    let list = [];

    emails.forEach(em => {
        let flag = em.indexOf("@");
        let localName = em.slice(0, flag);
        let domainName = em.slice(flag + 1);

        // 去除本地名称的所有 ‘.’ 符号
        localName = localName.replace(/\./g, '');
        // 去除本地名称的 ‘+’ 及之后的字符
        let flagPlus = localName.indexOf("+");
        if (flagPlus !== -1) {
            localName = localName.slice(0, flagPlus);
        }
        let nEmail = localName + domainName;
        if (!list.includes(nEmail)) {
            list.push(nEmail);
        }
    });
    return list.length;
};
