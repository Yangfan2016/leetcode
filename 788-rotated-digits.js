/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
    let map = {
        0: 0,
        1: 1,
        8: 8,
        2: 5,
        5: 2,
        6: 9,
        9: 6,
    };

    let c = 0;

    for (let i = 1; i <= N; i++) {
        let s = i + "";
        // 123   15_
        let r = "";

        if (map[s[s.length - 1]] === void 0) continue;

        for (let j = 0, len = s.length; j < len; j++) {
            let t = map[s[j]];

            if (t === void 0) {
                r = "";
                break;
            }
            r += t;
        }

        if (r !== "" && r !== s) c++;

    }

    return c;
};