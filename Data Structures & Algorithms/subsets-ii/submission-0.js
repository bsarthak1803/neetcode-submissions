class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums = nums.sort();
        let res = [];
        function getAllSubsetsWithdup(nums, subsets, i){
            if(i === nums.length){
                res = [...res, subsets];
                return;
            }

            //include
            getAllSubsetsWithdup(nums, [...subsets, nums[i]], i+1);

            let idx = i+1; //start with i+1 and till n and check for duplicates before making call to exclusion
            while(idx < nums.length && nums[idx] === nums[idx-1]) idx++;

            //exclude, instead of passing i+1, now the index would be idx as we are avoiding the duplicates
            getAllSubsetsWithdup(nums, [...subsets], idx);
        }
        getAllSubsetsWithdup(nums, [], 0);
        return res;
    }
}
