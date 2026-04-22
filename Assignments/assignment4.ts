/*Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions
*/

// Creating an array of transactions
let transactions:number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000];

//total number of credit and debit transactions completed
// total amount credited and debited in account
//total amount remaining at the end in Bank Account
//positive :credit
//negative: debit
let credit:number=0;
let totalCredit:number=0;
let debit:number=0;
let totaldebit:number=0;
let totalAmountLeft:number=0;

for(let tr of transactions)
{
    if(tr>=0)
    {
        credit++;
        totalCredit+=tr
    }
    else
    {
        debit++;
        totaldebit+=tr
    }

    totalAmountLeft+=tr //total amount remaining at the end in Bank Account
}

console.log(`Number of credit transactions: ${credit}`);
console.log(`Number of dedit transactions: ${debit}`);
console.log(`Total amount of credit transactions: ${totalCredit}`);
console.log(`Total amount of dedit transactions: ${totaldebit}`);
console.log(`Total amount left after all transactions: ${totalAmountLeft}`);

//Suspicious credit/ debit Transaction with Amount”
let suspTransaction:number=0;
for(let tr of transactions)
{
    if(tr>10000 || tr<-10000)
    {
        console.log(`"Suspicious credit/debit Transaction with Amount": ${tr}`);
        suspTransaction++;
    }

}

console.log(`Total suspicious transactions: ${suspTransaction}`);



