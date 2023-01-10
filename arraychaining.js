//Array Chaning
//ex:1

let products=[
       {id:1,title:"Android Phone",cost:7500},
       {id:2,title:"Gaming Computer",cost:90500},
       {id:3,title:"HeadPhone",cost:2400},
];

//Sort it using lowest price

let sort_lowest_price=products.sort((a,b)=>{
   return a.cost-b.cost; //ascending
});

console.log(sort_lowest_price)


//Sort it by title asceding


let sort_lowest_title=products.sort((a,b)=>{
   
    return  a.title > b.title;
});
 
console.log(sort_lowest_title)


//filter Products less than 8000

let filtered=products.filter((value)=>{
      return value.cost<=8000;
});

console.log(filtered);

//map it like this://Android phone - 7500

let final=filtered.map((value)=>{
    return value.title +" "+value.cost;
});

console.log(final);