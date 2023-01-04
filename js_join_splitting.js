//Joining Javascript Array

const dailyRoutine=['wakeup','eat','sleep'];
let dailyRoutines=dailyRoutine.join(",");
console.log(dailyRoutines);

//Split Javascript Array
let Fullname="sathish mathew";

let fullname=Fullname.split(" ");
console.log(fullname);


//Ex2: Slug

let posttitle="This is my post";
let postslug=posttitle.toLowerCase().split(" ");
let finalslug=postslug.join('_');
console.log(finalslug);




