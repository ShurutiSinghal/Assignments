//syntax:
//Declaration variable =value

//Datatypes
//1. Primitive - immutable
//2. Non -primitive -mutable

let a=10
a+10
console.log(a) //10

let b=[1,2,3]
b.push(5)
console.log(b)

/********************************/
//Primitive

//1.Number

let num1=10
let num2=10.5

console.log(num1+ typeof(num1))
console.log(num2+ typeof(num2))

//2. String 

let str1="Hi! 'Good Morning'"
let str2='Hi! "Good morning"'

console.log(str1)
console.log(str2)

//backtick uses
let empname="Sanjay"
let location="Delhi"

console.log("Employee name is "+empname+" and location is "+location)
console.log(`Employee name is ${empname} and location is ${location}`)

//3. Boolean
let x=10
let y=20
let result= x>y
console.log(result)

//undefined: variable is declared but not assigned a value
//null: variable is declared and assigned a null value

let age
console.log(age) //undefined

let salary=1000
salary=null
console.log(salary) //null

// symbol

//2. Non -primitive data types
//Object

let person={
    name:"Shuruti",
    age:35,
    visastatus:true,
    address:{
        city:"New Delhi",
        state:"Delhi",
        zip:"110088"
    }
}

console.log(person.name)
console.log(person["name"])
console.log(person.address.city)
console.log(person.address["city"])

//array
let fruits=["apple","banana","orange","mango"]
let prices=[300,40,80,250]
let fruitsAndPrices=["apple",300,"banana",80,"orange",80]

console.log(fruits[3]) //index to access

//function



