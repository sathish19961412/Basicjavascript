//Dynamic Object

const Person={
    name:"sathish",
}
Person.age=24;
Person.greeting=function(){}
delete Person.greeting;
console.log(Person);