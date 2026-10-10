class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let resArr = []; // store all the arrays

        function combinationSumHelper(nums, target, arr = [], memo = {}){
            if(target < 0) return; // sum has become > target ... base condition

            if(memo[target] !== undefined) return memo.get(target); // return the memoized value

            if(target === 0){
                resArr = [...resArr, arr];
                memo[target] = arr;
                return;
            }

            for(let i=0; i < nums.length; i++){ // loop over all the elements
                combinationSumHelper(nums.slice(i), target - nums[i], [...arr, nums[i]]);
            }
        }
        combinationSumHelper(nums, target, []);

        return resArr;
    }   
}
