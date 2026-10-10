class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // nums, subarray (contiguous array), largest sum and return
    // nums = [2, -3, 4, -2, 2, 1, -1, 4]
    maxSubArray(nums) {
        let currentSum = 0;
        let maxSubArraySum = -Infinity;
        for(let i = 0; i<nums.length; i++){
            currentSum += nums[i];
            maxSubArraySum = Math.max(currentSum, maxSubArraySum);
            if(currentSum < 0){
                // maxSubArraySum = Math.max(currentSum, maxSubArraySum);
                currentSum = 0;
            }
        }
        return maxSubArraySum;
    }
}
