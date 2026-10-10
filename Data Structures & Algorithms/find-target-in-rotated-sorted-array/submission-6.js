class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    //asc order
    search(nums, target) {
        if(nums.length === 1 && target === nums[0]){
            return 0;
        }
        let left = 0;
        let right = nums.length - 1;

        while(left < right){ // first find the pivot index --- index at which the order changes
            let mid = Math.floor((left + right) / 2);
            if(nums[mid] > nums[right]) left = mid + 1; // we have hit the asc order so now check the left side
            else right = mid; // else check the right side
        }
        let pivot = left;
        console.log("pivot", pivot); // pivot is 0 means the array is not rotated or is rotated n times

        const result = binarySearch(nums, target, 0, pivot - 1);// check the left sorted subarray for target

        if(result !== -1)
            return result;
        
        return binarySearch(nums, target, pivot, nums.length - 1);

        function binarySearch(nums, target, left, right){
            while(left <= right){ // binary search to find the index of the target
                let mid = Math.floor((left + right) / 2);
                if(nums[mid] === target) return mid;
                else if(target > nums[mid]) left = mid + 1;
                else right = mid - 1;
            }
            return -1;
        }
    }
}
