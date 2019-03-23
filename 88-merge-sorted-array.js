/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let res=[];
    let n1=nums1.slice(0,m);

    while (n1.length>0 && nums2.length>0) {
        if (n1[0]<nums2[0]){ 
            res.push(n1.shift());
        } else {
            res.push(nums2.shift());
        }
    }

    if (n1.length>0) res=res.concat(n1);
    if (nums2.length>0) res=res.concat(nums2);

    for (let i=0;i<m+n;i++) {
        nums1[i]=res[i];
    }
};