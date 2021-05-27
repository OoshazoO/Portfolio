/*
*
*Created  by Shannonlee Gafney, this is my footer scripts javascrpt file
*
*/

//Website Loader

function LoaderTimer() {
  var Timer = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("MainDiv").style.display = "block";
}

//Mobile support menu

let button = document.getElementById('button-menu')
let main = document.getElementById('main')
button.addEventListener("click", e=>{
  button.classList.toggle("active")
  main.classList.toggle("active")
})