//sort ,filter,map,reduce() methods

const numbers=[34,4,65,12,78];

//sort()
let result=numbers.sort();

console.log(result);

//find()

let result1=numbers.find((value)=>{
    return value > 50;
});

console.log(result1);

//filter

let result2=numbers.filter((value)=>{
   return value >50;
});
console.log(result2);


//map

let result3=numbers.map((value)=>{
   return "#" + value;
});

console.log(result3);

//reduce

let result4=numbers.reduce((acc,value)=>{
    return acc + value;
 });
 
 console.log(result4);
 