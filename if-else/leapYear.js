/*#### 2.1 **Leap Year Check**
Write a program to check whether a given year is a **leap year** or not. A year is a leap year if:
- It is divisible by 4, **and**
- It is **not divisible** by 100 unless it is divisible by 400.
*/

/* Explanation :
    the should by divisible by 4 and if the number ending with 00 then the number should also be divisible by 400 
*/

import { prompt } from "../promptUtil.js";

let leapYear = parseInt(prompt("Enter a year : "));

// if (leapYear % 4 == 0) {
//   if (leapYear % 100 == 0) {
//     if (leapYear % 400 == 0) {
//       console.log(`${leapYear} is a Leap year`);
//     } else {
//       console.log(`${leapYear} is a leap year`);
//     }
//   } else {
//     console.log(`${leapYear} is a leap year`);
//   }
// } else {
//   console.log(`${leapYear} is not a leap year`);
// }

if (leapYear % 4 == 0 && leapYear % 100 != 0){
    console.log(`${leapYear} is a leap year`);
}
else if(leapYear % 4 == 0 && leapYear % 400 == 0){
    console.log(`${leapYear} is a leap year`);
}
else{
    console.log(`${leapYear} is not a  leap year`);
}
