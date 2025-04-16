let arr= [2,8,4];
let intitalValue = 5;
let startPos = 0;

if(arr[startPos] < intitalValue){
    arr[startPos] = arr[startPos]+intitalValue;
    console.log(arr);
    startPos++;
}

if(arr[startPos] <  arr[startPos-1]){
    arr[startPos] = arr[startPos-1]+intitalValue;
    console.log(arr);
    startPos++;
}
