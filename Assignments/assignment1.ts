/********************Assignment1****************/
/************Data types in Typescript**********/

//1. Temperature of a city in degrees Celsius: 25.5
let temperature:number=25.5;
console.log(`The temperature of a city is in degree celcius : ${temperature}`);

//2. Whether a customer has placed an order: true or false
let customerOrderStatus: boolean =true;
console.log(`The status of customer order is ${customerOrderStatus}`);

//3. Person's phone number: "123-456-7890"
let phoneNumber:string="123-456-7890";
console.log(`The phone number of person is ${phoneNumber}`);  

//4. Amount of money in a customer's bank account: 1000.50
let accountBalance:number=1000.50;
console.log(`Amount of money in a customer's bank account: ${accountBalance}`);

//5. Person's email address: "john.doe@example.com"
let email:string="john.doe@example.com";
console.log(`Person email address is ${email}`);


//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
//Tuple
interface coordinates{
    latitude:number,
    longitude:number
}

let location1:coordinates={
    latitude:37.7749,
    longitude:-122.4194
}

console.log(`The coordinates of location are : latitude = ${location1.latitude} and longitude = ${location1.longitude}`);

//7. Person's marital status: true or false
let maritalStatus:boolean=false;
console.log(`Person's marital status:${maritalStatus}`);

//8. Person's occupation: "Software Engineer"
let occupation:string="Software Engineer"
console.log(`Person's occupation: ${occupation}`)

//9. Person's favourite colour: "Blue"
let favouriteColor:string="Blue"
console.log(` Person's favourite colour: ${favouriteColor}`)


//10.Current year: 2023
let currentYear= new Date().getFullYear();
console.log(`Current year: ${currentYear}`)

//11.Number of followers on a social media platform: 1,000,000
let followers:number= 1000000
console.log(`Number of followers on a social media platform: ${followers}`)

//12.Rating of a movie: 7.5
let movieRating:number=7.5
console.log(`Rating of a movie: ${movieRating}`)

//13.Person's blood type: 'A'
let bloodType:string='A'
console.log(`Person's blood type: ${bloodType}`)

//14.Title of a book: "To Kill a Mockingbird"
let bookTitle:string="To Kill a Mockingbird"
console.log(`Title of a book: ${bookTitle}`)

//15.Number of employees in a company: 500
let numberOfEmployees:number=500
console.log(`Number of employees in a company: ${numberOfEmployees}`)

//16.Time of an event: 2:30 PM
let eventTime= new Date();
eventTime.setHours(14);
eventTime.setMinutes(30);
eventTime.setSeconds(0);

console.log(`Time of an event: ${eventTime.getHours()}:${eventTime.getMinutes()} PM `)

//17.Name of a country: "United States"
let countryName:string="United States"
console.log(`Name of a country: ${countryName}`)

//18.Person's eye color: "Brown"
let eyeColor:string="Brown";
console.log(`Person's eye color: ${eyeColor}`)

//19.Person's birthplace: "New York City"
let birthplace:string= "New York City"
console.log(`Person's birthplace: ${birthplace}`)

//20. Distance between two cities: 200.5
let distance:number=200.5
console.log(`Distance between two cities: ${distance}`)


// Time taken to complete the assignment : 15 minutes
//Submitted By
//Shuruti Singhal


