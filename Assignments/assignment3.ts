/*
Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students
*/


//array to store studentNames
let studentNames:String[]=["Suresh","Mahesh","Naresh"];

//Array to store student marks
let marks:number[]=[75, 80, 82];
//Array to store updated marks
let newMarks:number[]= new Array();

//adding 10 marks to each student and store in new Array
for(let i:number=0;i<marks.length;i++)
{
  newMarks[i]=marks[i]+10
}

//calculate average marks
let average:number=0;
for(let m of newMarks)
   {
      //console.log(m)
      average+=m;
   }
average/=3;

//printing the ouput
console.log("Updated Marks:")
for(let i:number=0;i<studentNames.length;i++)
{
  console.log(` ${studentNames[i]}  ${newMarks[i]}`)
}
console.log(`Average Marks: ${average}`)

