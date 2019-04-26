/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    let count=0;
    for(let i=0,len=nums.length;i<len;i++){
       let cur=nums[i];
       let next=nums[i+1];
       let prev=nums[i-1];

       if (cur>next) { // 如果当前值大于下一个值吗，说明逆序了
          count++; // 标记增加
          if (count>1) return false; // 如果标记的逆序次数大于1，那么则条件失败
          if (i>=1 && prev>next) { // 如果前一个值大于下一个值，那么将把当前值赋给下一个值，保持非递减
             nums[i+1]=cur;
          }
       }
    }
    return true;
};

