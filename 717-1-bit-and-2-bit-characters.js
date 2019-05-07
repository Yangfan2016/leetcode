/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    if (bits.length === 1) return true;

    let len = bits.length;

    for (let i = 0; i < len; i++) {
        let item = bits[i];
        if (item === 1) { // 如果是 1 ，则将本元素和后一位元素 “配对”
            bits[i] = -1;
            bits[i + 1] = -1;
        }
    }

    return bits[len - 1] !== -1; // 判断最后一位是否被 “配对”，来确定是否是 一比特字符
};
