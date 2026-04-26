/*
Assignment: Write a program to perform the following tasks:
1. Count the total number of words in the sentence.
2. Print the sentence words in reverse order.
3. Convert the first character of each word to uppercase and print original sentence

String sentence = "Java programming is fun and challenging";
*/

let sentence:String="Java programming is fun and challenging";
// Count number of word
const words:string[]=sentence.split(" ");
console.log(words)
console.log(`Number of word in string: ${words.length}`)

//2. Print the sentence words in reverse order.
console.log("Sentence in reverse order:")
let reversedString:string="";
for(let i=words.length-1;i>=0;i--)
{
    reversedString+=words[i]+" ";
}
console.log(reversedString)


//3. Convert the first character of each word to uppercase and print original sentence
let newString:string="";
console.log("New updated sentence:")
for(let w of words)
{
    newString+= w.charAt(0).toUpperCase()+ w.substring(1)+" ";
}
console.log(newString)