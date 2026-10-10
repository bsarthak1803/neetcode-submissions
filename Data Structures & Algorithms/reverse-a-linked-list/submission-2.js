/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let cur = head;
        let prev = null;
        while(cur){ // loop till cur becomes null
            let temp = cur.next;
            cur.next = prev; // initially prev is null, for the 1st node, this is where we are changing the next of cur to prev, reversing the next ref
            prev = cur;
            cur = temp; // cur points to the saved ref temp -> cur.next
        }
        return prev; // at last when cur reaches null, point head to prev which is basically the last node
    }
}
