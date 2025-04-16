/*#### 1.2 **Check if a Number is Positive, Negative, or Zero**
Write a program to check if a number entered by the user is **positive**, **negative**, or **zero**.
*/

/* Explanation :
if the number is greater than zero its a postive numver if number is else than zero its negative number 
and if number is zero than u have enterd zero number 
*/
const Promptps = require("prompt-sync")();

let pstNeg = parseInt(Promptps("Enter a number: "));

if(pstNeg > 0){
    console.log(`${pstNeg} is a postive number`);
}

else if(pstNeg < 0){
    console.log(`${pstNeg} is a negative number`);
}
else{
    console.log(`${pstNeg} you have entered zero`);
}
