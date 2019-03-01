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

// 方法一 迭代
var reverseList = function (head) {
    if (!head) return null;
    let arr = [];


    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    let h = new ListNode;
    let n = h;

    for (let len = arr.length, i = len - 1; i >= 0; i--) {
        n.next = new ListNode(arr[i]);
        n = n.next;
    }
    return h.next;
};

// 方法二 逐个移动

var reverseList2 = function (head) {
    if (!head) return null;

    let p = null;

    while (head) {
        let n = head.next; // 2->3->4->5->null    3->4->5->null
        head.next = p; // 2->1->null
        p = head; // 2->1->null
        head = n; // 2->3->4->5->null
    }
    return p;
};