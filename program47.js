const varName = document.querySelector("input");
varName.addEventListener("change", changedHandler)

function changedHandler (e) {
    console.log(e.type);
}