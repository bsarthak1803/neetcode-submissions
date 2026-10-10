/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution { // use res as an array than an object
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    // nested list
    // sublist -> values of nodes at a particular level in the tree , left -> right
    // [1, 2, 3, 4, 5, 6, 7]
    // maintain a queue -> push nodes as we traverse -> start popping the elements from the first index (till queue is non empty)
    // as you pop the element -> add the element to the level's sublist -> then push its children to the queue.
    levelOrder(root) {
    //     if(!root) return [];
    //     let res = [];
    //     let queue = [root];
    //     while(queue.length > 0){ // loop until queue is empty
    //         let n = queue.length; // length of the queue determines the elements in each level sublist
    //         let levelSubList = []; // list to store the same level elements
    //         while(n > 0){ // loop over the length of queue --- before pushing children, looping over the specific level at a time
    //             let topElement = queue.shift(); // pop the first element, remove first element from the array
    //             // Enqueue valid children only
    //             if(topElement) levelSubList.push(topElement.val); // push the parent to its sublist
    //             if (topElement.left) queue.push(topElement.left); // update the queue with left child
    //             if (topElement.right) queue.push(topElement.right); // update the queue with right child
    //             n--;
    //         }
    //     if(levelSubList.length > 0)
    //         res.push(levelSubList); // at the end push the level specific sublist to the res
    //     }
    // return res;
        if (!root) return [];

        let res = [];
        let queue = [root];
        let head = 0; // Pointer avoiding O(N) shift operations

        while (head < queue.length) {
            let levelSize = queue.length - head;
            let levelSubList = [];

            for (let i = 0; i < levelSize; i++) {
                let curr = queue[head++];
                levelSubList.push(curr.val);

                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);
            }

            res.push(levelSubList);
        }

        return res;
    }
}
