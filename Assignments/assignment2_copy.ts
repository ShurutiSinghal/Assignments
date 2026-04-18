/**************Conditonal Statements **********************/
/*********************************************************/

//Creating a custom datatype for customer

interface CustomerDetails{
  customerName:string,
  creditScore :number;
  income:number;
  isEmployed:boolean;
  debtToIncomeRatio:number;
}

//To create a function to check whether the loan is approved or not
function loanApplicationstatus(cust:CustomerDetails):void{
    if(cust.creditScore>750){
        console.log(`The credit score is ${cust.creditScore}: is above 750`)
        console.log("The loan is approved.")
    }else if(cust.creditScore>=650 && cust.creditScore<=750)
         {
            console.log(`The credit score is ${cust.creditScore}: is between 650 and 750`)
            console.log("Checking income....")
            if(cust.income>=50000)
            {
               console.log(`The income is ${cust.income} :is above 50000`)
               console.log("Checking employment status....")
                if(cust.isEmployed)
                {
                    console.log(`The employment status is true`)
                     console.log("Checking debttoIncomeRatio....")
                    if(cust.debtToIncomeRatio<=40)
                    {
                        console.log(`The debtToIncomeRatio is ${cust.debtToIncomeRatio}:below 40`)
                       console.log("Th loan status is approved after all checks.")
                    }
                    else
                    {
                        console.log(`The debtToIncomeRatio ${cust.debtToIncomeRatio}: is above 40`)
                        console.log("The loan status is not approved")
                    }

                }
                else
                {
                     console.log(`The employment status is not true`)
                     console.log("The loan status is not approved")
                }
               // return true;
            }else
            {
                console.log(`The income is ${cust.income} is below 50000`)
                console.log("The loan status is not approved")
            }
        
        }
    else
    {
        console.log(`The credit score is ${cust.creditScore} is below 650`)
        console.log("The loan status is not approved")
    }
    
}

//creating a customer using the above data type
let customer2: CustomerDetails={
    customerName : "John Doe",
    creditScore : 720,
    income : 55000.0,
    isEmployed : true,
    debtToIncomeRatio :45.0
}

//Calling the function
 loanApplicationstatus(customer2);

