class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length === 0)
            return 0;
        if(s.length === 1)
            return 1;
        // freq-lookup object
        let freqLookupObj = {};
        let startInd = 0;
        let i = 0;
        let maxSubStringLength = -Infinity;
        while(i < s.length){
            let curChar = s[i];
            if(freqLookupObj[curChar] !== undefined){ // duplicate char found, adjust startInd and re-calculate length
                startInd = Math.max(startInd, freqLookupObj[curChar] + 1);
            }
            maxSubStringLength = Math.max(maxSubStringLength, i - startInd + 1);
            freqLookupObj[curChar] = i;
            i++;
        }
        return maxSubStringLength;
    }
}
