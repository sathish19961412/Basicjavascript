//Finding Element in Javascript Arrya

const items=["Apple","Lemon","Graphs"]

//Array Finding Methods
console.log(items.indexOf('Lemon'));
console.log(items.lastIndexOf('Apple'));
console.log(items.indexOf("Graphs")!==1)
console.log(items.includes('Graphs'));

//Finding Element in a Javascript Reference Array

//ex1:

const orders=[
    {
       id:1,
       item:"sathish" 
    },
    {
        id:2,
        item:"Guruprasath" 
     }
]

let result=orders.find(function(order){

    return order.item==="sathish"
})
console.log(result)

let result1=orders.findIndex(function(order){

    return order.item==="sathish"
})
console.log(result1)