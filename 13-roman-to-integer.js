/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let c = 0;

    /**
     * 通常情况下，罗马数字中小的数字在大的数字的右边。
     * 但也存在特例，例如 4 不写做 IIII，而是 IV。
     * 数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。
     * 同样地，数字 9 表示为 IX
     */

    for (let i = 0, len = s.length; i < len; i++) {
        let cur = s[i];
        let next = s[i + 1];
        let n = map[cur];
        let m = map[next];

        c += (n < m ? -1 : 1) * n;

    }

    return c;

};
