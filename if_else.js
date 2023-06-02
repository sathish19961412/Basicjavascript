//Hot and Cold ex:1
let weather="cold";

if(weather === "hot")
{
    console.log("weather is hot!");
} 
else
{
    console.log("weather is so cold");
}

//Rain come or not ex:2
let israining =false;
let iscolding =false;

if(israining || iscolding)
{
  console.log("Don't forget to take Umbrella !");
}
else
{
  console.log("Sky is normal enjoy the weather");
}

//If hour is between 12AM(0) to 1PM(0) ->Good Morning
//If hour is between 1PM(13) to 5PM(17) ->Good Afternoon
//If hour is between 5PM to 12AM ->Good Evening

// let hrs=new Date();
// let hours =hrs.getHours();

let hours=new Date().getHours();

if(hours >=0 && hours <=13)
{
    console.log("Good Morning");
}
else if(hours >=13 && hours <=17)
{
  console.log("Good Afternoon");
}
else
{
  console.log("Good Evening");
}