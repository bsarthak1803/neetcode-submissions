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

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root, level = 0, res = []) { // using recursion , method
        if(!root) return []; // hits the base condition root is null, return empty array

        if(res.length === level) //visiting this level for the first time, push empty array to the res[]
            res.push([]);

        res[level].push(root.val); // push the current root value to the res[level] array

        //first access left child
        this.levelOrder(root.left, level + 1, res); // need to use this.method
        //then access right child
        this.levelOrder(root.right, level + 1, res);
        return res;
    }
}
