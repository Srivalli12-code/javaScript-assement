const Promptev = require("prompt-sync")();

let evOd = parseInt(Promptev("Enter a number: "));

if( evOd % 2 == 0){
    console.log("its an even number");
}
else{
    console.log("Its an odd number");
}