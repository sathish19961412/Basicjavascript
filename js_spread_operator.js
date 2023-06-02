//Spread Operator

const shopping_cart=["magi","beans"];
const additional_cart=["salt","noodles"];


let recipe=[...shopping_cart,45,{name:"sathish"},...additional_cart];
console.log(recipe);