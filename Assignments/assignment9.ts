/*Assignment: Write a program to print * in triangle pattern
1. If I will pass int rows = 5 then it should print triangle with 5 Rows
    *
   **
  ***
 ****
*****
*/ 

let rows: number=5  // to store number of rows
//spaces 4,3,2,1,0 ---> rows-i
//* :1,2,3,4,5  ---> i

// loop for all rows
for(let i=1;i<=rows;i++)
{
    let line:String=""; //each row

    //spaces for each row
    for(let j=1;j<=rows-i;j++)
    {
      line+=" ";
    }
    //for stars
    for(let j=1;j<=i;j++)
    {
        line+="*";
    }
    console.log(line)
}