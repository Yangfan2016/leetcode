/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    // 1. 快慢指针找中点
    // 2. 归并排序  O(nlog n) O(n)

    if (!head) return null;
    if (!head.next) return head;

    // 取到中间数，然后分割为两段
    let s = head; // 慢，单次移动
    let f = head; // 快，双次移动
    let prev = null; // 记录 慢指针的前一个节点，方便分割

    // 1-null f
    // 2-1 s

    while (f != null) {
        if (!f.next) break;
        prev = s;
        f = f.next.next;
        s = s.next;
    }
    prev.next = null; // 分割

    let left = sortList(head);
    let right = sortList(s);

    return mergeTwoLists(left, right);

};

// 归并
function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    let p = new ListNode;
    let h = p;

    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }

    if (l1) p.next = l1;
    if (l2) p.next = l2;

    return h.next;
};
