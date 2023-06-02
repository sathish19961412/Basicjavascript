//ex1:
//Allow only adults above

const queue_by_age=[24,32,45];

let is_Allowed=queue_by_age.some(function(value,index,array){
      console.log("value:",value);
      console.log("index:",index);
      console.log("array",array);
});


//ex2:
const queue_by_age1=[24,32,45];
let is_Allowed1=queue_by_age1.some(function(value,index,array){
    return value >=18;
});

console.log("isAllowed:",is_Allowed);

//ex3:

const numbers=[1,2,3,4,5];

//every() It depends to only one index[0] 

let isEven=numbers.some(function(value){
       return value%2===0;
});

console.log(isEven);

//some() It depends to all one index

let isOdd=numbers.some(function(value){
    return value%2===1;
});

console.log(isOdd);