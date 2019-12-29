
var bubbleShort= (arr)=>{
for(let i=arr.length;i>0;i--){
    for(let j=0;j<i;j++){
        if(arr[j] > arr[j+1]) [arr[j],arr[j+1]] =[arr[j+1],arr[j]];
    }
}

    return arr;
} 

console.log(bubbleShort([3,6,9,32,13,67,-44,-12,8]));