const Promptage = require("prompt-sync")();

 let vote = parseInt(Promptage("Enter a number: "));

//let vote = 120;

if(vote > 120 || vote < 0){
    console.log(`Invalid age`);
}
else if(vote >= 18 ){
    console.log(`Person is Eligible to vote`);
}
else {
    console.log(`Person is not Eligible to vote`);
}