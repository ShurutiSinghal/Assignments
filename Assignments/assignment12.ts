/*
Implement pow(x, n), which calculates x raised to the power n (i.e., xn
).

Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
*/

//Function to calculate power of a number
function calcPower(base:number,exp:number):number{
    
    //variable to store result
    let result:number=1;
    let positiveExpo:number=Math.abs(exp);

    // loop for absolute value of exponent
    for(let i:number=positiveExpo;i>0;i--)
    {
        result=result*base;
    }

    if(exp<0)
    {
        return 1/result;
    }

    return result;

}

let base:number=2;
let expo:number=0;
let ans:number= calcPower(base,expo);
console.log(`${base} rasised to power ${expo} is ${ans}`);