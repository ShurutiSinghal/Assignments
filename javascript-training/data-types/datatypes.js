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

//function => A function represents a block of code or collection of statements to complete a particular task. 
// Test Case 3: verify the account statement
console.log("******************TEST CASE 3: VERIFY THE ACCOUNT STATEMENT******************");
launchBrowserAndLogin("firefox", "https://uat.icici.com/");
console.log("Verify the home page is displayed");
console.log("Navigate to the account statement page");
console.log("Verify the account statement is displayed with the following details:");
logoutAndCloseBrowser();

function launchBrowserAndLogin(browser_name, url) {
    console.log(`Launch the ${browser_name} Browser`);
    console.log(`Enter the URL: ${url}`);
    console.log("Enter the username as 'Bharath' and password as 'Bharath@123'");
    console.log("Click on the login button");
}

function logoutAndCloseBrowser() {
    console.log("Logout from the application");
    console.log("Close the browser");
}

function getAccountBalance() {
    console.log("Navigate to the account balance page");
    let accountBalance = 100000;
    return accountBalance;
}

// Set => A set represents a collection of unique values of any data type. 
let empIds = new Set(); //creating the empty set will store the data. 
empIds.add(121);
empIds.add(122);
empIds.add(123);
empIds.add(123);
empIds.add(124);

console.log(empIds);

//Map => A map can store multiple values in the form of key-value. When it comes to a map, it is going to allow duplicate values but won't allow duplicate keys. 
let empMap = new Map();
empMap.set("empId", 121);
empMap.set("empName", "Bharath");
empMap.set("empAge", 36);
empMap.set("empId", 122);//duplicate key
empMap.set("empLuckyNumber", 36);//duplicate value
console.log(empMap);

//Date => The date data type represents a specific point in time.
let currentDate = new Date();
console.log(currentDate);

//get current year
console.log(currentDate.getFullYear());

//get current month
console.log(currentDate.getMonth() + 1); // month starts from 0 to 11

//get current date
console.log(currentDate.getDate());

//get current day
console.log(currentDate.getDay()); // day starts from 0 to 6 (0-Sunday, 1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday)

//get current hours
console.log(currentDate.getHours());

//get current minutes
console.log(currentDate.getMinutes());

//get current seconds
console.log(currentDate.getSeconds());





