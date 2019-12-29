//// write function to accept base and exponent and return value

////simple(lame) way
var power = (base, exponent) =>{
    let val=1;
    for(let i=exponent; i>0; i--){
        val *=base;
    }
    return val;
}
//console.log(power(2,4));


//// Recursion Way
var powerR = (base, exponent) =>{
if(exponent == 0) return 1;
return base* powerR(base, exponent-1);
}
//console.log(powerR(2, 4));

//// Recursion factorial function

function factorial(num){
    if(num === 0) return 1;
    if(num === 1) return 1;
    return num*factorial(num-1);
    }
//console.log(factorial(6));


//// write function for product of an array values

function productOfArray(data){

function helps(arr){
    if(arr.length ===0) return 1;
     return arr[0]* helps(arr.slice(1));
}
return helps(data);

}

//console.log(productOfArray([2,3,2,2,3,4]));

//// functon to accept a number and add up all num from 0 to that number

function recursiveRange(num){
    if(num === 0) return 0;
    return num + recursiveRange(num-1);
}

//recursiveRange(14);

/// function to get Nth number in fibonacchi sequence

function fib(data){
let fibArr=[];

function fibHelper(num){
    //if(fibArr.length === 1) 

for(let i=1;i<=num;i++){
    if(i === 1) fibArr.push(1);
    if(i === 2) fibArr.push(1);
    if(i >2) fibArr.push(fibArr[i-1-1]+fibArr[i-2-1]);
}


}
fibHelper(data);
return fibArr[data-1];
} 


console.log(fib(18));