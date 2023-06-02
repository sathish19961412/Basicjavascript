//Factory Function

function CreatePerson(name){
    return{
        name,
        greeting(){
            let msg=`my name is ${this.name}`;
            console.log(msg);
        }
    };
}

let sathish=CreatePerson("sathish");
    sathish.greeting();