/* 1.1 **Even or Odd Number**
Write a program to check if a number entered by the user is **even** or **odd**.
*/

/*Explanation :
   if number is divisible by 2 then its even and if its not divisible then its an odd number
*/

import {prompt} from '../promptUtil.js'

let evOd = parseInt(prompt("Enter a number: "));

if( evOd % 2 == 0){
    console.log("its an even number");
}
else{
    console.log("Its an odd number");
}