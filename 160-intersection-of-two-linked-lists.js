/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    /**
     * 找到 短的那个链表，移动长的链表到达短的那个链表的头的位置，开始进行比较
     * 
     *   4,1,8,4,5 
     * 5,0,1,8,4,5
     */
    let lenA = getLen(headA);
    let lenB = getLen(headB);
    let dis = lenA - lenB;

    if (dis !== 0) {
        if (dis > 0) {
            // a 长
            headA = moveOffset(dis, headA);
        } else {
            headB = moveOffset(-dis, headB);
        }
    }

    let node = null;

    while (headA && headB) {
        if (headA === headB) {
            node = headA;
            break;
        }
        headA = headA.next;
        headB = headB.next;
    }

    return node;

};

function getLen(head) {
    let len = 0;
    let p = head;

    while (p) {
        len++;
        p = p.next;
    }
    return len;
}

function moveOffset(dis, head) {
    for (let i = 0; i < dis; i++) {
        head = head.next;
    }
    return head;
}



// 方法2
var getIntersectionNode2 = function (headA, headB) {
    // a+b===b+a
    /**
     * 4,1,8,4,5 5,0,1,8,4,5
     * 5,0,1,8,4,5 4,1,8,4,5
     * 
     * 利用 a+b===b+a 
     * 两轮就可以补齐链表的位置
     * 
     * 4,1,8,4,6 5,0,1,8,4,5
     * 5,0,1,8,4,5 4,1,8,4,6
     */

    if (!headA || !headB) return null;

    let hA = headA;
    let hB = headB;

    while (hA !== hB) {
        hA = hA === null ? headB : hA.next;
        hB = hB === null ? headA : hB.next;
    }

    return hA;
}