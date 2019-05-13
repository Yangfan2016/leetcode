/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return "1";
    if (n === 2) return "11";


    let tmp = ""; // 临时存放上一次的报数结果
    let res = "11"; // 最后的报数结果

    for (let i = 3; i <= n; i++) {
        let c = 1;
        let prev = res[0]; // 1211 1


        for (let j = 1, len = res.length; j <= len; j++) {
            let cur = res[j];

            if (cur === prev) { // 如果前一个元素和当前元素相等，计数增加
                c++;
            } else {
                // 遇到不相等的数，将之前记录的计数结果存入 tmp 中
                tmp += c + "" + prev;
                // 重置计数器  
                c = 1;
                // 前一个元素移动至当前元素的位置
                prev = cur;
            }
        }
        // 存入结果集
        res = tmp;
        // 重置，清空
        tmp = "";
    }

    return res;
};
