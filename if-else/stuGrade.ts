const Promptst = require("prompt-sync")();

let stGrade = parseInt(Promptst("Enter Student Marks: "))

if(stGrade > 100){
    console.log("Enter Marks between 1 to 100");
}
else if(stGrade < 100 && stGrade >= 90){
    console.log(`Student got A grade with ${stGrade} marks `);
}
else if(stGrade < 90 && stGrade >= 80){
    console.log(`Student got B grade with ${stGrade} marks`);
}
else if(stGrade < 80 && stGrade >=70){
    console.log(`Student got C grade with ${stGrade} marks`);
}
else if(stGrade < 70 && stGrade >= 60){
    console.log(`Student got D grade with ${stGrade} marks`)
}
else{
    console.log("Student got F grade better luck nect time");
}