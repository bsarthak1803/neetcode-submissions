class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // return true if any value appears more than once
    // keep a track of visited values / occurrences, freq of visited values / hashmap
    hasDuplicate(nums) {
        const freqObj = {}; //stores the freq of the element
        // const unique = new Set([...nums]);
        // console.log("unique", unique);
        for(let i = 0; i<nums.length; i++){
            if(freqObj[nums[i]] !== undefined) return true;
            else freqObj[nums[i]] = 1;
        }
        // if(nums.length !== unique.size) return true;
        return false;
    }
}
