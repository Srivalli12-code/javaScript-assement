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
