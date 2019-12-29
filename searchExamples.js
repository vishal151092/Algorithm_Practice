// Pseudo linear search, similar to indexOf

var findIndex= (arr, val)=>{

for(let i=0;i<arr.length;i++){
    if(arr[i]=== val) return i;

}
return -1;
}

//console.log(findIndex([1,4,6,8,9,12,14,17], 18));


//// function for Binary search

var binarySearch = (arr, val)=>{
var left=0;
var right=arr.length-1;
var middle =Math.floor((left+right)/2);

while(arr[middle]!== val && left<=right){
if(arr[middle] < val) left = middle+1;
if(arr[middle] > val) right = middle-1; 
middle=Math.floor((left+right)/2);
}
return arr[middle] ===val ?middle : -1;

}

//binarySearch([1,4,6,8,9,12,14,17], 4);


//// search string pattern in bigger string.

function matchString(str1, str2){
var count=0;
for(let val1=0; val1<= str1.length; val1++){

    for(let val2=0; val2<= str2.length;val2++){
        if(str1[val1+val2]!==str2[val2]) break;  // val1+val2 is for matching index 
    if(val2 === str2.length-1) count++;
    }

}

return count;
}

console.log(matchString("this is US is done", "is"));




