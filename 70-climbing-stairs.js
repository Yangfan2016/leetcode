/**
 * @param {number} n
 * @return {number}
 */

let cache=[1,2];

var climbStairs = function(n) {
   if (n<1) return 0; // 极端情况
   if (n<3) return cache[n-1]; // 极端情况
   if (cache[n-1]) return  cache[n-1]; // 从缓存里取值
    
   cache[n-1]=climbStairs(n-1)+climbStairs(n-2); // 存入缓存
    
   return cache[n-1];
};


