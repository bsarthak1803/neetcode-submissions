class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // [10, 1, 5, 6, 7, 1]
        // buy on day n and sell on day m
        // maximise the profit --- price[m] - price[n]
        // track the minPriceInd and calc price diff btw i and minPriceInd
        // if i < minPriceInd -> update minPriceInd
        let max = 0;
        let n = prices.length;
        let min = Infinity;
        let i = 0;
        while(i < n){
            min = Math.min(min, prices[i]);  // keep track of min.
            max = Math.max(max, prices[i] - min); // keep track of max with current max and updated min diff
            i++;
        }
        return max;
    }
}
