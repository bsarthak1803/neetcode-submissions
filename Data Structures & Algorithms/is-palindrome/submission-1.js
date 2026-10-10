class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // reads the same forward and backward, traverse the string, from both sides, in a single pass -> 2 pointers theorem
    isPalindrome(s) {
        let start = 0;
        let end = s.length - 1;
        let strLower = s.toLowerCase();
        while(start < end){
            while(start < end && !isAlphanumeric(strLower[start])) start++; // skipping non-alpha-numeric char
            while(start < end && !isAlphanumeric(strLower[end])) end--; // skipping non-alpha-numeric char

            if(strLower[start] !== strLower[end]) return false;
            start++;
            end--;
        }
        return true; //if all chars match when traversing string from both ends

        function isAlphanumeric(str) {
            return /^[a-zA-Z0-9]+$/.test(str); // regex pattern match, returns bool
        }
    }
}
