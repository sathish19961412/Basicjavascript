let person={
    name:"sathiksh",
    age:"25",
    isAlive:true,
    gender:"male",
    address:"Coimbatore,Tamilnadu,India",
    sibling:{
        brother:"guru",
        sister:"mahalakshmi"
    }
}//Object

//Dot Notation
console.log(person.age);
console.log(person.sibling.brother);
console.log(person.sibling.sister);

//bracket Notation
console.log(person['gender']);
console.log(person['isAlive']);