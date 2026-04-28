/*
Best Time to Buy and Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the i
th day.
You want to maximize your profit by choosing a single day to buy one stock and choosing
a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve
any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy
before you sell.
Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

//Function to calculate the day on which max profit can be earned
//It will return index+1 from the array
//as on index 0 we are storing the price of stock at day1
// also it return -1 that mean no transaction can be done to make profit

function calcMaxProfit(price:number[],dayToBuy:number):void
{
    
    // creating a variable to store maximum profit
    let maxProfit:number=0;
    let dayToSell:number=0;

    //to store stock price on day to Buy
    let stockPriceOnBuyDay:number=price[dayToBuy-1]; 
    let stockPriceOnSellDay:number|undefined=undefined;

    //Here day is passed as 2: means 1st index
    //starts the loop from next index which is day 
     for(let i:number=dayToBuy;i<price.length;i++)
   {
    // check if price of stock is giving more profit that previous profit
     if((price[i]-stockPriceOnBuyDay)>maxProfit)
     {
        stockPriceOnSellDay=price[i] // to store stock price 
        maxProfit=stockPriceOnSellDay-stockPriceOnBuyDay // Calulate profit
        dayToSell=i+1; // To store the day when stock was sold
     }
   }

   console.log(`Stock prices day wise: ${price}`)
   console.log(`Stocked buy at day:${dayToBuy}`)
   console.log(`Price of stock:${stockPriceOnBuyDay}`)
   if(stockPriceOnSellDay!==undefined)
   {
   console.log(`Max profit can be earned if stock is sell on day :${dayToSell}`)
   console.log(`Profit earned: ${stockPriceOnSellDay} - ${stockPriceOnBuyDay} = ${maxProfit}`)
   }
   else
   {
      console.log("In this case, no transactions are done and the max profit = 0.");
   }
}


let prices:number[]=[7,1,5,3,6,4];
let dayToBuyStock:number=2; // here the day is 1st index

//calling function to know day to sell and maximum profit that can be earned
calcMaxProfit(prices,dayToBuyStock);

console.log("/*********************************************/")
 prices=[7,6,4,3,1];
 dayToBuyStock=2; // here the day is 1st index

//calling function to know day to sell and maximum profit that can be earned
calcMaxProfit(prices,dayToBuyStock);
