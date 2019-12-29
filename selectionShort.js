// in selection short we start shorting by pushing smallest number at start of array

var selectionShort = (arr) =>{
let minValIndex;

for(let i=0; i<=arr.length-1; i++){
    minValIndex=i;
    for(let j=i;j <=arr.length-1;j++){
        if(arr[minValIndex] > arr[j]) minValIndex =j;
    }
    [arr[i], arr[minValIndex]] = [arr[minValIndex],arr[i]];
}

    return arr;
}
console.log(selectionShort([12,4,2,6,3,89,32,11,-3]));