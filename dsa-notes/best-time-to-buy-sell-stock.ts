function bestTimeToBuySellStock(prices: number[]): number { //last number means function must return a number
    let minPrice = Infinity; //any price we encounter will be less than infinity, so we can find the minimum price easily
    let maxProfit = 0; //initially, we have no profit, so we set it to 0

    for (const price of prices) { //for ..of iterates over each price in the prices array
        minPrice = Math.min(minPrice, price); //we need to find the minimum price we can buy the stock at.
        maxProfit = Math.max(maxProfit, price - minPrice);//
    }

    return maxProfit;
}

console.log(bestTimeToBuySellStock([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(bestTimeToBuySellStock([7, 6, 4, 3, 1])); // Output: 0