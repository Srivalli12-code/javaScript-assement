/*#### 2.2 **Find the Largest of Three Numbers**
Write a program that accepts three numbers from the user and prints the **largest number**.
 If all the numbers are equal, print "All numbers are equal."
*/

/*
*/

const Promptlar = require("prompt-sync")();

console.log("Enter three numbers : ");

let a = parseInt(Promptlar());
let b = parseInt(Promptlar());
let c = parseInt(Promptlar());

if(a==b && b == c){
    console.log(`All Number are equal`);
}
else if (a >= b && a >= c) {
  console.log(`${a} is largest number`);
} else if (b>= a &&b >= c) {
  console.log(`${b} is largest number`);
} else {
  console.log(`${c} is largest number`);
}
