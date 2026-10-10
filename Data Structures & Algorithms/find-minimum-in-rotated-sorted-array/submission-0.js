class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let smallest = nums[0];
        for(let i=0; i<nums.length-1; i++){
            if(nums[i+1] <= nums[i]) smallest = nums[i+1]; // find the pivot element
        }
        return smallest;
    }
}
