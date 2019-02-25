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
    // {val:2,next:{val:4,next:{val:3,next:null}}}
    // {val:5,next:{val:6,next:{val:4,next:null}}}

    let curLeft = l1;
    let curRight = l2;
    let res = new ListNode(0);
    let head = res;
    while (curLeft.next) {
        let n1 = curLeft.val;
        let n2 = curRight.val;

        res.next = res.next || new ListNode(0);

        // 满 10 进 1
        let sum = n1 + n2;
        if (sum >= 10) {

            res.next.val = res.next.val + 1;
            res.val = sum - 10;

            curLeft.next=new ListNode(0);
        } else {
            res.val += sum;
        }
        curLeft = curLeft.next;
        curRight = curRight.next;
        res = res.next;
    }

    return head;
};

// listnode

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var n1 = new ListNode(2);
var n2 = new ListNode(4);
var n3 = new ListNode(3);

n1.next = n2;
n2.next = n3;

var m1 = new ListNode(5);
var m2 = new ListNode(6);
var m3 = new ListNode(4);

m1.next = m2;
m2.next = m3;

addTwoNumbers(n1, m1);
