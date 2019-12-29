function anagram(str1, str2){
let obj1 = {};
let obj2 = {};
for(let char1 of str1){

    if(obj1[char1] >0)
        obj1[char1] = ++obj1[char1];
    else
    obj1[char1] = 1
}


for(let char2 of str2){

    if(obj2[char2] >0)
        obj2[char2] = ++obj2[char2];
    else
    obj2[char2] = 1
}
console.log(obj1);
console.log(obj2);

for(let char in obj1){

if(obj1.length !== obj2.length){
    return false;
}
if(obj1[char] !== obj2[char]){
return false;
}


}
return true;
}

console.log(anagram(1222, 4333));
