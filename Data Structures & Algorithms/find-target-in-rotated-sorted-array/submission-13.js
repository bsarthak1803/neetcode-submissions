class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    //asc order
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while(left < right){ // first find the pivot index --- index at which the order changes / divides the array into 2 sorted   subarrays
            let mid = Math.floor((left + right) / 2);
            if(nums[mid] > nums[right]) left = mid + 1; // we have hit the asc order so now check the left side
            else right = mid; // else check the right side
        }

        let pivot = left;
        console.log("pivot", pivot);

        if(pivot === 0){
            return binarySearch(0, nums.length - 1);
        }
        else{
            if(target <= nums[nums.length - 1]){
                return binarySearch(pivot, nums.length - 1);
            }
            else return binarySearch(0, pivot - 1);
        }

        // const result = binarySearch(0, pivot - 1);// check the left sorted subarray for target

        // if(result !== -1)
        //     return result;
        
        // return binarySearch(pivot, nums.length - 1);

        function binarySearch(left, right){
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
