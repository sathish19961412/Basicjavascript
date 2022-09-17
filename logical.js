//Logical AND(&&)
//Returns True If Both Operands Are True.
console.log(false && true);

//Logical OR(||)
//Returns True If Anyone Operands are True.
console.log(false || true);

//NOT (!)

console.log(true);

//INCOME TO CIBILSCORE Logical Operator 

let highincome = true;
let cibincome  = false;
let eligibileperson = highincome && cibincome;
let applicationstatus =!eligibileperson;
console.log("Loan Status:"+eligibileperson);
console.log("Application Status:"+applicationstatus);