/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return null;
    let r=new ListNode;
    r.next=head;
    let p=r;
    
    while(p.next) {
          if (p.next.val===val) {
              p.next=p.next.next;
              } else {
                  p=p.next; 
              }
           
          }
    
    return r.next;
};
