let sumdig = 12345;
let newSum = 0;

while(sumdig > 0){
 newSum = newSum +  sumdig % 10;
 sumdig = Math.floor(sumdig / 10);
}
console.log(newSum);


