class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // this is O(n) solution as for any rotated array, we need to traverse till the end to find the possible smallest pivot element
        // let smallest = nums[0];
        // for(let i=0; i<nums.length-1; i++){
        //     if(nums[i+1] <= nums[i]) smallest = nums[i+1]; // find the pivot element
        // } 
        //  return smallest;

        // O(log n) time complexity
        // if the array is rotated, it can be divided into 2 oparts, 1 -> elements > last element (false) and 2 -> elements <= last element (trues), find the index of first true.

        let left = 0; //start index --> left pointer
        let right = nums.length - 1; //end index --> right pointer
        // let boundaryInd = 0; // index of the pivot element / smallest element
        while(left < right){
            let mid = left + Math.floor((right-left)/2);
            if(nums[mid] < nums[right]){
                right = mid; // check the left side of the array --> all elements towards right of mid till the end are sorted
            }
            else left = mid + 1; // check the right side of the array --> pivot element can be found on the right side till the end         
        }
        return nums[left];
    }
}
