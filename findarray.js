//Finding Js array find() & findIndex

const items=[
   {id:1,item:"Android",cost:6500},
   {id:2,item:"iphone",cost:27000}
];

let affordable=items.find(function(value){
      return value.cost < 10000;
});


console.log("Afforable-find",affordable);