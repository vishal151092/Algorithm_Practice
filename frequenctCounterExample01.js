//// write a function to return true or false based on if first array has squared value match in other array



var squares= (arr1, arr2)=>{

if(arr1.length !== arr2.length)
return false;

    var Obj1={};
    var Obj2={};
    for(let val of arr1){
        if(Obj1[val])
            Obj1[val]++;
        else
            Obj1[val]=1;
    }

       for(let val of arr2){
        if(Obj2[val])
            Obj2[val]++;
        else
            Obj2[val]=1;
    }

    for(let key in Obj1){
        if(!(key ** 2 in Obj2))
        return false;

        if(Obj1[key] !== Obj2[key**2])
        return false;
    }
    return true;
}


squares([2,1,3],[1,4,9]);