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
var addTwoNumbers = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;


    let m = new ListNode;
    let head = m;
    let carry = 0; // 进位

    while (l1 || l2 || carry) { // 两个链表长度可能不一致，需要走完较长的那个链表，或者 还有需要进位的，还需要再循环一次
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry; // 两数之和再加上之前的进位

        if (sum / 10 >= 1) { // 满 10 进 1
            carry = 1;
            sum -= 10; // 当前位需要砍去溢出的部分
        } else {
            carry = 0;
        }

        m.next = new ListNode(sum); // label:1 将结果保存到下一个节点上 

        m = m.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return head.next; // 因为 label:1 所以返回的指针指向下一个节点
};
