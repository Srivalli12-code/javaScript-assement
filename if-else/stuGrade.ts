/* **Grade Evaluation**
Write a program that accepts a student's **score** and prints:
- **A** if the score is between 90 and 100 (inclusive),
- **B** if the score is between 80 and 89,
- **C** if the score is between 70 and 79,
- **D** if the score is between 60 and 69,
- **F** if the score is below 60.
*/

/* Explanation :
    Student score should be only in 0 to 100 
    student will get A grade if the score is between 100 to 90
    student will get B grade if the score is below 90 and above 80 
    student will get C grade if the score is below 80 and above 70
    student will get D grade if the score is below 70 and above 60
    student will get F grade if the score is below 60

*/
const Promptst = require("prompt-sync")();

let stGrade = parseInt(Promptst("Enter Student Marks: "))

if(stGrade > 100){
    console.log("Enter Marks between 0 to 100");
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