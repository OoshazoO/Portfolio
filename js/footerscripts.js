/*
*
*Created  by Shannonlee Gafney, this is my footer scripts javascrpt file
*
*/

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}