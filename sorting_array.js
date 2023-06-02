const students=[3,8,1];
students.sort();
students.reverse();

const student=[
    {
        id:3,name:"sathish"
    },
    {
        id:8,name:"mathew"
    },
    {
        id:1,name:"guru"
    },

];

let sort=student.sort((a,b)=>{
  nameA=a.name.toLowercase();
  nameB=b.name.toLowercase();
  
  //a<b=>-1

  if(nameA < nameB)
  {
    return -1;
  }
  //a>b=>1
  else if(nameA > nameB)
  {
    return 1;
  }
  //a==>0
  else{
    return 0;
  }

});




