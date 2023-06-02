//ex1:
let name="sathish";
let age="24";
let interest=["Creating the object"];
let address={
    city:"coimbatore",
    state:"Tamilnadu",
}
function greeting(){
    // let msg="my name is"+ name +"I love"+interest;
    let msg=`my name is ${name} I love ${interest}`;
    console.log(msg);
}
greeting();

//ex2:Object

let Person={
    name:"sathish",
    age:"24",
    interest:["Creating the object"],
    isAlive:true,
    address:{
    city:"coimbatore",
    state:"Tamilnadu",
    },
    greeting:function(){
     let msg=`my name is ${name},I love ${interest}`;
     console.log(msg);
    }

};
  Person.greeting();