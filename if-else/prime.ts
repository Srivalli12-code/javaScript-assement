const Promptpri = require("prompt-sync")();

let prNum = parseInt(Promptpri("Enter a number: "));

//let prNum = 5;
let flage = true;

for (let n = 2; n < prNum; n++) {
  if (prNum % n == 0) {
    flage = false;
    break;
  }
}
if (flage) {
  console.log("its prime number");
} else {
  console.log("its not a prime number");
}
