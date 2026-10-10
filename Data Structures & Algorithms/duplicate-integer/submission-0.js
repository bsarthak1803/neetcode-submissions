class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // return true if any value appears more than once
    // keep a track of visited values / occurrences, freq of visited values
    hasDuplicate(nums) {
        const freqObj = {};
        for(let i = 0; i<nums.length; i++){
            if(freqObj[nums[i]] !== undefined) return true;
            else freqObj[nums[i]] = 1;
        }
        return false;
    }
}
