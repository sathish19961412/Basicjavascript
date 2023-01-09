//Filtering Js array
//ex:1:

const quue_Age=[24,34,45];

let adults=quue_Age.filter((age)=>{
     return age >=18;
});

console.log("adults",adults);


//ex:2:

const num=[1,2,3,4,5];

let enumbers=num.filter((value)=>{
      return value%2==0;
});

console.log("Even Numbers",enumbers);


const num1=[1,2,3,4,5];

let enumbers1=num1.filter((value)=>{
      return value%2==1;
});

console.log("Odd Numbers",enumbers1);