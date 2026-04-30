//normal function to generate random number
function normalFunction(): number {
    return Math.random();
}

//call the normal function
console.log(normalFunction());

// we want the function to compulsory generate random number greater than 0.5

async function generateRandomNumber():Promise<string> {
    return new Promise((resolve,reject)=>{
        const random=Math.random();
        if(random>0.5)
        {
             resolve(`Random number   ${random} is generated and it is greater than 0.5. `)
        }
        else
        {
             reject('Random number   ${random} is generated, But Unfortunately, it is less than 0.5.  ')
        }
    })    
}

//calling function

let value= await generateRandomNumber();
console.log(value); // currently no wait

//to add wait
// create aynch function with setTimeOut

async function generateRandomNumberWithTimeout():Promise<string> {
    return new Promise((resolve,reject)=>{
        const random=Math.random();
        setTimeout(()=>{
            if(random>0.5)
        {
             resolve(`Random number   ${random} is generated and it is greater than 0.5. `)
        }
        else
        {
             reject('Random number   ${random} is generated, But Unfortunately, it is less than 0.5.  ')
        }
        },3000);
    })    
}

//Calling the asynchronous functions. 
let value1 = await generateRandomNumberWithTimeout();
console.log(value1);  // it waits for 3 seconds
