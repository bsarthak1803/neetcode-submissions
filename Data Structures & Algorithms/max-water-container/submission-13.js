class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) { // move away from the lower line from both ends
        let maxVolContainer = -Infinity;
        let start = 0;
        let end = heights.length - 1;
        while(start<=end){
            const currentVol = (end-start)*Math.min(heights[start], heights[end]);
            maxVolContainer = Math.max(maxVolContainer, currentVol);
            if(heights[end] >= heights[start]) // move away from start - towards end
                start++;
            else end--; // move away from end - towards start
        }
        return maxVolContainer;
    }
}
