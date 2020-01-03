// Complete the aVeryBigSum function below.

function findAllSum(ar){

let total = "";

aVeryBigSum(ar);

function aVeryBigSum(ar) {

for(let i=0;i<ar.length;ar++){
let sum="";
let str1=ar[0].toString();
let str2=ar[1].toString();

if(str2.length > str1.length) [str2,str1] = [str1,str2];

let carry=0;
let a , b , temp, digitSum;

for(let i=0;i<str1.length;i++){
    a=parseInt(str1.charAt(str1.length-1-i));
    b=parseInt(str2.charAt(str2.length-1-i));
    b= b? b :0;
    temp =(a+b+carry).toString();
    digitSum=temp.charAt(temp.length-1);
    carry = parseInt(temp.substr(0,temp.length-1));
    carry = carry ? carry : 0;

sum = (i === str1.length-1) ? temp+sum : digitSum+sum; 
}
if(ar.length>2)
ar.splice(0,2);
else ar=[];
ar.push(sum);

if(ar.length ==1){
     total= sum;
     break;
}
else if(ar.length >1) aVeryBigSum(ar);

}
}

return total;

}




findAllSum([2436875638452,287979872,2787999320042]);
