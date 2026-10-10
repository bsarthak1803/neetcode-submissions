class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        if(nums.length === 1)
            return nums[0];
        let maxSoFar = nums[0]; // initialise with the first element
        let minSoFar = nums[0]; // initialise with the first element
        let result = maxSoFar; // result will always be the max of maxSoFar so can be initialised to maxSoFar
        for(let i=1; i<nums.length; i++){
            let curr = nums[i];
            const tempMaxSoFar = Math.max(curr, maxSoFar*curr, minSoFar*curr);
            minSoFar = Math.min(curr, maxSoFar*curr, minSoFar*curr);
            maxSoFar = tempMaxSoFar;
            result = Math.max(maxSoFar, result); // keep on updating the result with max of maxSoFar till now
        }
        return result;
    }
}
