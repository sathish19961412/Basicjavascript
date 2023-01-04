//Cloning Object

const User={
     name:"sathish",
     getFullname(){
        console.log(`my name is ${this.name}`);
     }
}
User.age=24;
let another={
    ...User
}

console.log(another);