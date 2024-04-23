// document.addEventListener("DOMContentLoaded", function() {

//     const currentYear = new Date().getFullYear();
//     document.getElementById("currentYear").textContent = currentYear;


//     const lastModified = document.lastModified;
//     document.getElementById("lastModified").textContent = lastModified;
// });
// const currentYear = new Date().getFullYear(); 
// const yearElement = document.querySelector('#year');

const currentYear = new Date().getFullYear();
const lastModifiedDate = new Date(document.lastModified);

document.getElementById('currentyear').innerText = currentYear;
document.getElementById('lastModified').innerText = "Last Modified: " + lastModifiedDate;