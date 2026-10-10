class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let resArr = [];

        function combinationSumHelper(nums, target, arr = [], memo = new Map()){
            if(target < 0) return;

            if(memo.has(target)) return memo.get(target); // return the memoized value

            if(target === 0){
                resArr = [...resArr, arr];
                memo.set(target, arr);
                return;
            }

            for(let i=0; i < nums.length; i++){
                combinationSumHelper(nums.slice(i), target - nums[i], [...arr, nums[i]]);
            }
        }
        combinationSumHelper(nums, target, []);

        return resArr;
    }   
}
