/**
 * @param {number} n
 * @return {number}
 */

let cache = [1, 2];

var climbStairs = function (n) {
   if (n < 1) return 0; // 极端情况
   if (n < 3) return cache[n - 1]; // 极端情况
   if (cache[n - 1]) return cache[n - 1]; // 从缓存里取值

   cache[n - 1] = climbStairs(n - 1) + climbStairs(n - 2); // 存入缓存

   return cache[n - 1];
};


// 方法2
var climbStairs2 = function (n) {
   //【数学】排列组合
   // 2x+y=n

   let middle = n >> 1;
   let x = 0;
   let y = 0;
   let c = 0;

   while (x <= middle) {
      y = n - 2 * x;
      c += combine(x, y + x);
      x++;
   }

   return c;
};
// 组合
function combine(m, n) {
   return factorial(n) / (factorial(m) * factorial(n - m));
}
// 阶乘
function factorial(n) {
   if (n < 2) return 1;

   return n * factorial(n - 1);
}


