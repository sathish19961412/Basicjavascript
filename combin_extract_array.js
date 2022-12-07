//ex1:1
//combining Arrays

const shopping_cart=["magi","beans"];
const additional_cart=["salt","noodles"];

//combine

let recipe=shopping_cart.concat(additional_cart);
console.log(recipe);

//Extract

let extract=recipe.slice(1,3);
console.log(extract);

//ex2:

const shopping_cart1=[
    {
        item:"maagi"
    }

];
let shop=shopping_cart1[0].item="noodles";
console.log(shopping_cart1);
