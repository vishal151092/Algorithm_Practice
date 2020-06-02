// bubble sort
// push lagest value to the top, and keep decreasing loop size(i= arr.length)
//outer loop from reducing value, inner from increasing (0 to i-1)

function bubbleSort(arr){
let isSwapped=true;
for(let i=arr.length; i>0; i--){
    isSwapped=false;
for(let j=0;j<i-1;j++){
    if(arr[j] > arr[j+1]){
      [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
      isSwapped=true;  
    } 
}
if(!isSwapped) break;

}
    return arr;
}

bubbleSort([2,4,64,63,55,33,86,32])