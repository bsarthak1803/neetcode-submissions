class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // i and j, nums[i] + nums[j] === target && i !== j
    twoSum(nums, target) {
        // create a lookup object
        const indDiffLookup = {};
        for(let i=0; i<nums.length; i++){
            const diff = target - nums[i];
            console.log("diff", diff);
            const lookupVal = indDiffLookup[nums[i]];
            if(lookupVal !== undefined){ //check if the current element is there in the diff lookup which would mean the paired element has already occurred.
                return [lookupVal, i];
            } // else store the mapping of diff and index
            else{
                indDiffLookup[diff] = i;
            }
            // console.log("indDiffLookup", indDiffLookup);
        }
    }

    // i = 0, diff = 4, No, indDiffLookup[4] = 0
    // i = 1, diff = 3, Yes, return[indDiffLookup[4] = 0, 1]
    // i = 2, diff = 2, No, indDiffLookup[2] = 2
    // i = 3, diff = 1, No, indDiffLookup[1] = 3 
}
