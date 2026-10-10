class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // i and j, nums[i] + nums[j] === target && i !== j
    twoSum(nums, target) {
        // building a lookup object which maps the diff with the occurred index
        const indDiffLookup = {};
        for(let i=0; i<nums.length; i++){ //running a loop
            const currentElement = nums[i];
            const lookupVal = indDiffLookup[currentElement];
            if(lookupVal !== undefined) return [lookupVal, i];//check if the current element is there in the diff lookup which would mean the paired element has already occurred.
                 // else keep on updating the lookup object
            else indDiffLookup[target - currentElement] = i;
        }
    }

    // i = 0, diff = 4, No, indDiffLookup[4] = 0
    // i = 1, diff = 3, Yes, return[indDiffLookup[4] = 0, 1]
    // i = 2, diff = 2, No, indDiffLookup[2] = 2
    // i = 3, diff = 1, No, indDiffLookup[1] = 3 
}
