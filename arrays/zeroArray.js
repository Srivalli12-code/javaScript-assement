let i = [7,0,6,8,0,9,5];
let result=[];
let zeroCount = 0;
let startPos = 0;


while(startPos < i.length)
{
    if(i[startPos] != 0){
      result.push(i[startPos]);
    }
    else{
        zeroCount++;
    }
    startPos++;
}
while(i.length > result.length)
{
    result.push(0);
}
console.log(result);