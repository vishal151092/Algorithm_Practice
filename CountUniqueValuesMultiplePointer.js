//// Add function to find count of unique values in an array of numbers
/*
function countUnique(arr){

let obj ={};
let count=0;
for(let num of arr){
    if(!obj[num]) 
    obj[num]=1;
}
for(let para in obj){
count++;
}
return count;

}

countUnique([2,4,4,5,3,3,3,2,3]);
*/

//// doing above problem with newly tought way

function countUniqueNew(arr){
let firstPointer=0;
let secondPointer=1;

while(secondPointer <arr.length){
if(arr[firstPointer] !== arr[secondPointer]){
    firstPointer ++;
    arr[firstPointer]=arr[secondPointer];
}
secondPointer++;
console.log(arr);

}
return arr.slice(0, firstPointer+1);
}

console.log( countUniqueNew([1,1,1,2,2,3,4,8,9,22]) );
