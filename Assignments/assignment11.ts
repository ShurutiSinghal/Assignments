/* rows=5
                       i     spaces(row-i)      num (1 to i)
    1                  1       4
   1 2                 2       3   
  1 2 3                3       2
 1 2 3 4               4       1
1 2 3 4 5              5       0 
 1 2 3 4
  1 2 3
   1 2
    1
*/

//to define the row with max number: middle row
let n:number=5;

//upper half(including middle row)
//Outer loop: for each row
for(let i:number=1;i<=n;i++)
{
    //create empty row
   let row:string="";

   //add spaces to row: spaces are decreasing from 4,3,2,1,0
   for(let s:number=(n-i);s>0;s--)
   {
    row+=" ";
   }

   //add numbers to row: 1,2,3,4,5 and add space after each number
   for(let num:number=1;num<=i;num++)
   {
    row=row+num+" ";
   }
   
   //print row
   console.log(row);

}

//lower half(Excluding middle)

//Outer loop: for each row
// loop to print 4 numbers , then 3 and so on
for(let i:number=n-1;i>=0;i--) 
{
    //create empty row
   let row:string="";

   //add spaces to row: spaces are increasing 1,2,3,4
   //as i is starting from 4,3,2,1
   for(let s:number=(n-i);s>0;s--)
   {
    row+=" ";
   }

   //add numbers to row: 4,3,2,1
   for(let num:number=1;num<=i;num++)
   {
    row=row+num+" ";
   }
   
   //print row
   console.log(row);

}