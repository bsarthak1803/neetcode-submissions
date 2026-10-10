class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let resArr = [];
        let n = nums.length;
        function getPermutations(nums, idx = 0){
            if(idx === n){ // base condition
                resArr.push([...nums]);
                return;
            }

            for(let i=idx; i < n; i++){
                [nums[idx], nums[i]] = [nums[i], nums[idx]];  //in place swapping of the fixed index element with the different options
                getPermutations(nums, idx + 1); // recursively call the next level or the next position to be decided
                [nums[idx], nums[i]] = [nums[i], nums[idx]]; // swap the elements back to their original position 
            }
        }
        getPermutations(nums);
        return resArr;
    }
}
