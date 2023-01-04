  //example 1:Grade S ,Grade P ,Grade F 

  let grade="s";

  switch (grade)
  {
      case grade="s":
          console.log("Higher Grade");
          break;
      case grade="p":
          console.log("Pass Grade");
          break;
      default:
          console.log("Unknow Grade");
  }

  //example 2:Grade > 90 ,Grade < 50 , Grade > 50 && Grade <=70

  let marks=0;

  switch (true){
    case (marks >90):
         console.log("Super Marks");
         break;
    case (marks >50 && marks <=90):
         console.log("Excellent Marks");
         break;
    case (marks<50):
         console.log("failed");
         break;
    default:
         console.log("Unknow Marks")
  }