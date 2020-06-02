//insertion sort
//here we compare each element with all previous elements in sequence and if value is smaller than value checked with, value checked is added to above index. and this is continued
// until we find a compared value which is smaller than currentVal. then we move currentVal to index above it.(value of index able is already copied to its above index)


function insertionSort(arr){

for(let i=1;i<arr.length;i++){
    let currentVal=arr[i];
    for(var j=i-1;j>-1;j--){
        if(arr[j] > currentVal){
            arr[j+1]=arr[j];
        }else
        break;
         
    }
    arr[j+1]=currentVal;
}
    return arr;
}

insertionSort([9,2,1,5,22,6,3]);