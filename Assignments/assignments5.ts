/*
Employee Table
S.No Name     Base Salary   Experience (Years)    Year-End Rating (Out of 5)


    Alice
1   Johnson    75000.0           5.1                     4.2
2  Bob Smith   68000.0           3.2                     3.8
3 Carol Davis  82000.0           7.1                     4.5
4 David Brown  90000.0           10.2                    2.5
5 Eva Green    60000.0           2.4                     3.5

Hike
Rating          % of base Salary as variable pay        Bonus
> =4.0                15.0                               1500
>=3 && < 4            10.0                               1200
< 3.0                 3.0                                 300

Extra Perks
Employees with Experience >= 5 Years get extra Reward of 5000;

There are 5 Employee records. Now Calculate the Hike percentage of each Employee and store the
Values in Map with EmployeeName and HikePercentagevalue and Print them.

Hike = ( Base Salary * variable pay % ) + Bonus + Reward ;
Hike % = Hike / Base Salary .
*/

// Creating a data structure to store Employee
interface Employee{
    name:string,
    baseSalary:number;
    experience:number;
    rating:number;
}

//Array to store all Employee
let employeeDetails:Employee[]= [
    { name: "Alice Johnson", baseSalary: 75000, experience: 5.1, rating: 4.2 },
    { name: "Bob Smith", baseSalary: 68000, experience: 3.2, rating: 3.8 },
    { name: "Carol Davis", baseSalary: 82000, experience: 7.1, rating: 4.5 },
    { name: "David Brown", baseSalary: 90000, experience: 10.2, rating: 2.5 },
    { name: "Eva Green", baseSalary: 60000, experience: 2.4, rating: 3.5 }
];

function calculateHike(emp:Employee):number
{
  let hikePercentage:number=0;
  let variablePayPercent=0;
  let bonus=0;
  let reward=0;

  //Rating based logic
  // Calculate variablePayPercent and bonus
  if(emp.rating>=4.0)
  {
    variablePayPercent=15;
    bonus=1500
  }
  else if(emp.rating>=3.0)
      {
         variablePayPercent=10.0;
          bonus=1200
      }
  else
     {
        variablePayPercent=3.0;
        bonus=300 
     }

  //extra perks
  if(emp.experience>=5)
    reward=5000;

  //calcuate Hike
 let hikeAmount:number = (emp.baseSalary * variablePayPercent)/100 + bonus + reward ;
 //console.log(`Variable Pay:${(emp.baseSalary * variablePayPercent)/100 }`)
 //console.log(`Hike Amount:${hikeAmount}`)
 hikePercentage=(hikeAmount/emp.baseSalary *100); // *100 to show percent

  return Number(hikePercentage.toFixed(2)); // toFixed return String 
}

//Iterate the array to calculate the hikePercentage of Employee
// for(let emp of employeeDetails)
// {
//     console.log(`Name: ${emp.name}, BaseSalary:${emp.baseSalary}, Experience:${emp.experience},Rating:${emp.rating}`)
//     console.log(`Hike Percentage:${calculateHike(emp)}`);

// }

// Store it in Map
let empMap:Map<String,Number>= new Map();
for(let emp of employeeDetails)
{
    empMap.set(emp.name,calculateHike(emp));
}

//Print the Map
console.log(empMap)