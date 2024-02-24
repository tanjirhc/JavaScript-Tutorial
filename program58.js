//JS BOM
//JS Timing Events methods
// setTimeout(), SetInterval()

// setTimeout(()=>{
//   console.log("hi");
// }, 3000);

// setTimeout(display, 2000);
// function display(){
//   console.log("display function");
// }

const saveButton = document.querySelector('.save-btn');
const message = document.querySelector('.message');

saveButton.addEventListener('click', saveUser);
function saveUser(){
  message.textContent = "User Registration Successful";

  setTimeout(() => {
    message.textContent = "";
  }, 2000);
}