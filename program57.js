//js BOm
// pop boxes - alert, confirm, prompt

//alert("error here");
//confirm("Are you sure");

// function deleteSomething(){
//   let value = confirm("Do you want to delete the item?");
//   if(value){
//     console.log('Deleted');
//   }
//   else{
//     console.log('Not deleted');
//   }
// }
// deleteSomething();

function welcomeMessage(){

  var h1 = document.createElement('h1');
  let text;

  var name = prompt("Enter your name");

  if(name == null || name == ""){
      text = 'No name found';
  }else{
      text = name;
  }

  var textNode = document.createTextNode(text);
  h1.appendChild(textNode);
  document.body.appendChild(h1);
}

welcomeMessage();
