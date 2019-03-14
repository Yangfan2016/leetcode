/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    if (num1 === "0") return num2;
    if (num2 === "0") return num1;

    let a1 = num1.split("").reverse();
    let b1 = num2.split("").reverse();
    let res = [];
    let carry = 0;

    while (a1.length > 0 || b1.length > 0 || carry) {
        let sum = (a1.length > 0 ? +a1.shift() : 0) + (b1.length > 0 ? +b1.shift() : 0) + carry;

        if (sum > 9) {
            carry = 1;
            sum = sum - 10;
        } else {
            carry = 0;
        }

        res.push(sum);
    }

    return res.reverse().join("");

};