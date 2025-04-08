const Promptdiv = require("prompt-sync")();

let divNum = parseInt(Promptdiv("Enter a Number: "));

if(divNum % 3 == 0 && divNum % 5 == 0){
    console.log(`${divNum} is Divisible by both 3 and 5`);
}
else if(divNum % 3 == 0){
    console.log(`${divNum} is Divisible by 3`);
}
else if(divNum % 5 == 0){
    console.log(`${divNum} is Divisible by 5`)
}
else {
    console.log(`${divNum} is Neither divisible by 3 and 5`);
}
