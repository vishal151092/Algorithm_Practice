////implement function which accepts a sorted array, and counts the unique values in the array. T
////here can be negative numbers in the array, but it will always be sorted.

var countUniqueValues = (arr) =>{
    let i=0;
    let j=1;

    for(j=1;j <arr.length;j++){
if(arr[i] !== arr[j]){
    i++;
    arr[i]=arr[j];
   
}
if(j == arr.length-1){
    return arr.slice(0,i+1);
}
    } 
     //console.log(arr);
}


console.log(countUniqueValues([1,1,3,4,4,4,5]));