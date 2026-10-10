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
            currentSum += nums[i]; // add the element to the currentSum
            maxSubArraySum = Math.max(currentSum, maxSubArraySum); // then compare currentSum with the maxSubArraySum at each element
            if(currentSum < 0) currentSum = 0; // if currentSum becomes smaller than 0 then reset to 0       
        }   
        return maxSubArraySum;
    }
}
