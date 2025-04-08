const Promptlep = require("prompt-sync")();

let leapYear = parseInt(Promptlep("Enter a year : "));

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
