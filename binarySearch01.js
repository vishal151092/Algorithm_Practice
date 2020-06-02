//binarySearch example
// Divide and Conqure strategy

function binarySearch(arr, val){
let leftP=0;
let rightP=arr.length-1;
let midP= Math.floor((leftP+rightP)/2);


while(arr[midP] !== val && leftP<=rightP){
if(arr[midP] < val) leftP=midP+1;
else rightP=midP-1;
midP= Math.floor((leftP+rightP)/2);
}

return arr[midP] === val ? midP :-1;
}

console.log(binarySearch([2,4,6,,9,11,14,15,16,19,44,55,59], 65));