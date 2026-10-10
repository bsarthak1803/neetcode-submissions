class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxVolContainer = -Infinity;
        let start = 0;
        let end = heights.length - 1;
        while(start<=end){
            let currentVol = (end-start)*Math.min(heights[start], heights[end]);
            maxVolContainer = Math.max(maxVolContainer, currentVol);
            if(heights[end] > heights[start])
                start++;
            else if(heights[start] > heights[end])
                end--;
            else start++;
        }
        return maxVolContainer;
    }
}
