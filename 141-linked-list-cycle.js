/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 快慢指针相遇即为又环存在

    if (!head) return false;
    if (!head.next) return false;
    
    let s=head;
    let f=head;
    
    while (f!==null && f.next!==null) {
        f=f.next.next;
        s=s.next;
        
        if (f===s) return true;
    }
    return false;
};