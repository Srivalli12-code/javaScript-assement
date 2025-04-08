//const Promptsec = require("prompt-sync")();

//console.log("Enter three numbers : ");

// let s = parseInt(Promptsec());
// let t = parseInt(Promptsec());
// let u = parseInt(Promptsec());

// if(s==t && s==u){
//     console.log("Enter all numbers are equal")
// }
let s=15;
let t=16;
let u = 20;


if (s >= t && s >= u) {
  console.log(`${s} is largest number`);
  if (t >= u) {
    console.log(`${t} is second largest number`);
  } else {
    console.log(`${u} is second largest number`);
  }
}
else if (t >= s && t >= u) {
  console.log(`${t} is largest number`);
  if (s >= u) {
    console.log(`${s} is second largest number`);
  } else {
    console.log(`${u} is second largest number`);
  }
}
else  {
  console.log(`${u} is largest number`);
  if (s >= t) {
    console.log(`${s} is second largest number`);
  } else {
    console.log(`${t} is second largest number`);
  }
}


if ((s >= t && s <= u) || (s <= t && s >= u)) {
    console.log(`${s} is second largest number`);
  } else if ((t >= s && t <= u) || (t <= s && t >= u)) {
    console.log(`${t} is second largest number`);
  } else {
    console.log(`${u} is second largest number`);
  }
