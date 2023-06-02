//Javascript array-reduce method primitive
//ex:1

const donations=[45,78,95,65,4851];
donations.reduce(function(preval,currentval){
  //Logic
  console.log("Perviousal",preval);
  console.log("Currentval",currentval);
  return preval+currentval;
});

//ex:2

let totalnations=donations.reduce(function(preval,currentval){
    return preval + currentval;
});

console.log("Total Donations",totalnations);

//ex:3

const shoppingcart=[
     {id:1,item:"organic milk",cost:45},
     {id:2,item:"Bread",cost:20},
     {id:3,item:"maagi",cost:123},
];

let totalcost=shoppingcart.reduce(function(accumulator,currentval){
    console.log("accumlator",accumulator);
    return accumulator+currentval.cost;
},10);

console.log("Your Total is",totalcost);

//ex:4
