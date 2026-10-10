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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) { // list1 -> pointer to the first element/node of list 1 and list2 -> pointer to the first
        if(list1 === null) return list2;
        // 2 base cases
        if(list2 === null) return list1;

        //logic of recursion
        if(list1.val <= list2.val){
            list1.next = this.mergeTwoLists(list1.next, list2); // move the list1 pointer to the next list1 node
            return list1;
        }
        else{
            list2.next = this.mergeTwoLists(list1, list2.next); // move the list2 pointer to the next list2 node
            return list2;
        }
    }
}
