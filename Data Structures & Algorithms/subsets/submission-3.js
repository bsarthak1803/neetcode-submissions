class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [];
        function getAllSubsets(nums, subsets, i){
            if(i === nums.length){
                res = [...res, subsets];
                return;
            }

            //inclusion
            getAllSubsets(nums, [...subsets, nums[i]], i+1); // include nums[i] to the subsets

            //backtrack and exclusion
            getAllSubsets(nums, [...subsets], i+1); // backtrack and exclude
        }
        getAllSubsets(nums, [], 0);
        return res;
    }
}
