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
var addTwoNumbers = function(l1, l2) {
    if (!l1)
        return l2;
    if (!l2)
        return l1;

    // 复制链表
    let n1 = cloneList(l1);
    let n2 = cloneList(l2);

    // 进行翻转
    n1 = reverseList(n1);
    n2 = reverseList(n2);

    // 两数之和

    let node = new ListNode;
    let head = node;
    let carry = 0;

    while (n1 || n2 || carry) {
        let sum = (n1 ? n1.val : 0) + (n2 ? n2.val : 0) + carry;

        if (sum > 9) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }
        node.next = new ListNode(sum);

        node = node.next;
        if (n1)
            n1 = n1.next;
        if (n2)
            n2 = n2.next;
    }
    return reverseList(head.next);
};

/**
 * @param {ListNode} ls
 * @return {ListNode}
 */
function cloneList(ls) {
    let node = new ListNode;
    let res = node;
    let head = ls;
    while (head) {
        node.val = head.val;
        node.next = head.next === null ? null : new ListNode;
        head = head.next;
        node = node.next;
    }
    return res;
}

/**
 * @param {ListNode} ls
 * @return {ListNode}
 */
function reverseList(ls) {
    let arr = [];
    let head = ls;
    let node = new ListNode;
    let res = node;

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    for (let len = arr.length, i = len - 1; i >= 0; i--) {
        let item = arr[i];
        node.val = item;
        node.next = (i === 0) ? null : new ListNode;
        node = node.next;
    }
    return res;
}
