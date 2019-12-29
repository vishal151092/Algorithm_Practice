
// (function(){
//     console.log("ivoked function");
// })();

// var data = 4**2;
// console.log(data);

//// test for hoistiong of var, let and const

function test1(val){
const trueValue="Ashu";

    if(val){
const trueValue= "Vishal Singh"; 
console.log(trueValue);
    }else{
console.log(trueValue);
    
    }
}

//test1('test');

//// try to create immutable object

function immutableObjectTest(){

let test= {'name': 'vishal', 'age':27};
//Object.freeze(test);
let test2= test;

test.age = 26;
console.log(test);
console.log(test2);
console.log(test === test2);




}

immutableObjectTest();