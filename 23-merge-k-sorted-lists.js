/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let len = lists.length;
    if (len === 0)
        return null;
    if (len < 2) {
        return lists[0];
    }
    if (len === 2) {
        return sortLists(lists[0], lists[1]);
    }

    let middle = len >> 1;
    let left = lists.slice(0, middle);
    let right = lists.slice(middle);

    left=mergeKLists(left);
    right=mergeKLists(right);
    
    return sortLists(left,right);
};

function sortLists(l1, l2) {
    if (!l1)
        return l2;
    if (!l2)
        return l1;

    // 归并排序
    let p = new ListNode;
    let head = p;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }

    if (!l1) {
        p.next = l2;
    }
    if (!l2) {
        p.next = l1;
    }

    return head.next
}