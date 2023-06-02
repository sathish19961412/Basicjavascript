//Arrow Function

const orders=[

    {
        id:1,
        item:"sathish"
    },
    {
        id:2,
        item:"mathew"
    },
]

let result=orders.find((order)=>{
     return order.item==="sathish"
});

console.log(result);