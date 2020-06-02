//selection sort
// it's similar to bubble sort, but here we push smallest number to initial index of loop
// and reduce loop size in next loop from increasing start index.
// here for every loop, we assume, first index is smallest value and then compare it with each value 
// and mark smallest index to any value which is found smaller than previous one and again to other if that is smaller than previously smallest mark.
// at end of loop, we will have a smallest mark index which we will swap with first value.
// next loop we will increment start index as that value is already captured


function selectionSort(arr){
let smallestIndex=0;
for(let i=0;i<arr.length;i++){
    smallestIndex=i;
    for(let j=i+1;j<arr.length;j++){
        if(arr[j] < arr[smallestIndex]) smallestIndex=j;
    }
    if(i !== smallestIndex) [arr[i],arr[smallestIndex]]=[arr[smallestIndex],arr[i]];
}
    return arr;
}

selectionSort([5,3,55,32,22,12,45,38]);