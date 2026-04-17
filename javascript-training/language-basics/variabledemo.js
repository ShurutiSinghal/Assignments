//var: avoided in Modern Javascript
//let- can be reassigned
//const- can't be reassigned

//Differ on 4 parameters

//1.Initialization:
var a; //It is not compulsory to assign the value
let b; //It is not compulsory to assign the value
const c=10; //compulsory

//2.Reassignment: changing the values later
a=10; //allowed
b=20; //allowed
//c=30; //gives error while running

//3.Redeclaration- using the same variable to store different data
var a="Java"
//let b="HTML"  //Not allowed
//const c="SQL"  //Not allowed

//4.Scope
//let and const are block scoped
//var is not blocked scoped

{
    let x=100;
    const y=200;
    var z=300;
    console.log(x)
    console.log(y)
    console.log(z)

    //No error
}
   //console.log(x)
  //console.log(y)
  console.log(z)  //Only var is allowed
  

