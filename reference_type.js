const items=[
    {
        id:1,
        name:"Mobile",
        isDeliverable:true
    },
    {
        id:2,
        name:"Accessories",
        isDeliverable:true
    },
    {
        id:3,
        name:"Tv",
        isDeliverable:false
    },
];

let allDeliverable=items.every((value)=>{
     return value.name;
});
let notDeliverable=items.some((value)=>{
    return value.name;
});

console.log('All Deliverables',allDeliverable);

console.log('Not Deliverables',notDeliverable);
