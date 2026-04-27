/*Given a number n, determine whether it is a prime number or not. A prime number is a
number greater than 1 that has no positive divisors other than 1 and itself.
*/

function checkPrime(n:number):boolean{
    if(n<=1)
        return false;
    else{
        for(let i=2;i<n;i++)
        {
            if(n%i==0)
                return false;
        }
    }
    return true;
}

let num:number=7;
console.log(`Input number:${num}`)
console.log(`Output: ${checkPrime(num)}`)

num=5;
console.log(`Input number:${num}`)
console.log(`Output: ${checkPrime(num)}`)

num=1;
console.log(`Input number:${num}`)
console.log(`Output: ${checkPrime(num)}`)