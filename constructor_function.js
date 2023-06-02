//Constructor Functions

function Person(name){ //Pascal (My first letter caps letter)

    this.name=name;
    this.greeting=function(){
        console.log(`my name is ${this.name}`);
    }

}
let person =new Person("sathish");
    person.greeting();