var people=[];
var currentName;
var favoriteColor;

function addPerson()
{
  currentName = prompt("Enter name");
  favoriteColor = prompt("enter color");
  console.log(people);
  people.push({name: currentName, color:favoriteColor});
}

while(currentName !== 'STOP')
{
  if(currentName=== 'STOP')
  {
    break;
  }
  else{
    addPerson();
  }
}


// var o = {pets: ['abc' , 'def']}
