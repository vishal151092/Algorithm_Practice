// var a =new Map([["name","Vishal Singh"], ["Organisation","Accenture"],["technology","Angular"]]);

// console.log(a.size);
// console.log(a.set("age", 27));
// console.dir(a.has("age"));

//// try to get array from string

// var str= "vishal singh";
// console.log(str.split(''));


//// Try filter method for array in JS

var aList=["apple","mango","banana","raspberry"];

aList.filter((val)=>{
    return val.indexOf('b') != -1;
}) 


//// try forEach method for arrayin JS

var newList=["apple","mango","banana","raspberry"];
 
 newList.forEach((val)=> {
     console.log(`${val} is fruit`);
 })


 //// maps return array, but forEach dont
var dList=[2,3,4,5,6];
var res = dList.map(val =>{
    return val-1;
})
console.log(res);

//// try to get unique values in array using set

getUnique = (arr)=>{

    let setOne = new Set(arr);
    console.dir(setOne);
    console.log(setOne.size);

}

getUnique([1,3,2,2,4,5,6,7,84,43,5,33,33,6]);