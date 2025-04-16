/*Write a Bird program*/

/*Explanation:
the bird is at nth postion in the array and bird will move to right and take that food now bird will move
to left side and take that food if there no food then the bird will move forward in the same direction until
it reaches it targeted food or whole array become empty  
*/

let arr=[7,0,3,2,0,4,13,9,5];

let startPos = 3;
let total = arr[startPos];
let target = 120;
arr[startPos] = 0;

console.log(total);
console.log(arr);


let right = startPos+1;//4 

let left = startPos-1;//2

 while(total < target){
     while(arr[right] == 0){
         console.log(`Array is at ${right} index with value ${arr[right]} and total is ${total}`);
        right++;
    }
    if(right < arr.length){
         total = total+arr[right];
        console.log(`Array is at ${right} index with value ${arr[right]} and total is ${total}`);
       right++;
    } 
    if(total >= target){
        console.log(`Reached target ${total}`);
        break;
    }
    while(arr[left] == 0){
        console.log(`Array is at ${left} index with value ${arr[left]} and total is ${total}`);
        left--;
    }
    if(left >=  0){
        total = total+arr[left];
        console.log(`Array is at ${left} index with value ${arr[left]} and total is ${total}`);
        left--;
    }
}
 