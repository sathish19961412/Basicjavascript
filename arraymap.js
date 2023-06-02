//Js array map()
//ex:1

const numbers=[1,2,3,4,5];
let final=numbers.map((value)=>{
     return value*2;
});

console.log(final);


//ex2:

const people=[
      {
        id:1,firstname:"sathish",lastname:"mathew"
      },
      {
        id:2,firstname:"Guru",lastname:"prasath"
      }
];

let final1=people.map((val)=>{
     return [val.firstname,val.lastname].join(',');
})

console.log(final1);

//ex:3

const filter1=[1,2,3,4,5];
let filters=filter1.filter((value)=>{
     return value%2==0;
});

console.log("Even Numbers",filters);
