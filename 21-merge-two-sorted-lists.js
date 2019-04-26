/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    
    // 归并排序
    let p=new ListNode;
    let head=p;
    
    while(l1 && l2) {
        if (l1.val<l2.val) {
            p.next=l1;
            l1=l1.next;
        } else {
            p.next=l2;
            l2=l2.next;
        }
        p=p.next;
    }
    
    if (!l1) {
        p.next=l2;
    }
    if (!l2) {
        p.next=l1;
    }
    
    return head.next
};