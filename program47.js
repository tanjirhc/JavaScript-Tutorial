console.clear();
// const varName = document.querySelector("input[name=name]");
// varName.addEventListener("change", changedHandler);

// function changedHandler (e) {
//     // console.log(e.type);
//     // console.log(e.target);
//     // console.log(e.target.className);
//     // console.log(e.target.id);
//     console.log(e.target.value);
// }


// const programs = document.querySelectorAll('input[name=program]');
// console.log(programs);

// Array.from(programs).map((program) => {
//     program.addEventListener("change", programHandler)
// } );

// function programHandler(e){
//     if(e.target.checked){
//         console.log(e.target.value);
//     }
// };

const department = document.querySelector('#department');
console.log(department);

department.addEventListener('change', handleDepartment);
function handleDepartment(e) {
    console.log(e.target.value);
};