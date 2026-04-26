/*
Assignment: Write a program to search for all occurrences of a “Java” word in the paragraph and print their
indexes.
1. Find total number of occurrences
2. Print count and Indexes of the word

String paragraph = "Java is a popular programming language. Java is used for web
development, mobile applications, and more.";
*/

let paragraph:String=`Java is a popular programming language. Java is used for web development, mobile applications, and more.`

// find the word: count and indexes
let allwords:string[]= paragraph.split(" ");
let word:string="Java";
let indexes:number[]=[]; // to store indexes
for(let i=0;i<allwords.length;i++)
{
   if(allwords[i]==word)
   {
      indexes.push(i); // Add index 
   }
}
console.log(`Word: ${word}`)
console.log(`Total occurences:${indexes.length}`)
console.log(`Indexes of the word:${indexes}`)



