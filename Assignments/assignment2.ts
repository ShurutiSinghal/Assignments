/**************Conditonal Statements **********************/
/*********************************************************/

//Creating a custom datatype for customer
interface Customer{
  customerName:string,
  creditScore :number;
  income:number;
  isEmployed:boolean;
  debtToIncomeRatio:number;
}

//To create a function to check whether the loan is approved or not
function loanApplication(cust:Customer):boolean{

    //Checking Credit Score
    if(cust.creditScore>750){
        console.log(`The credit score is ${cust.creditScore}: is above 750`)
        return true;
    }
    
    if(cust.creditScore<650)
    {
        console.log(`The credit score is ${cust.creditScore}: is below 650`)
        return false;
    }

     console.log(`Credit score ${cust.creditScore} is between 650 and 750`);

    if (cust.income < 50000) {
      console.log(`Income ${cust.income} is below 50000`);
      return false;
     }

    if (!cust.isEmployed) {
       console.log(`Customer is not employed`);
       return false;
    }

   if (cust.debtToIncomeRatio > 40) {
    console.log(`Debt to Income Ratio ${cust.debtToIncomeRatio} is above 40`);
    return false;
   }

    console.log(`Loan approved after all checks`);
    return true;
 }
   

//creating a customer using the above data type
let customer1: Customer={
    customerName :"John Doe",
    creditScore : 720,
    income : 55000.0,
    isEmployed : true,
    debtToIncomeRatio :35.0
}

//Calling the function
let loan_status:boolean;
loan_status= loanApplication(customer1);
if(loan_status)
  console.log("The loan status is approved");
else
    console.log("The loan status is not approved");
